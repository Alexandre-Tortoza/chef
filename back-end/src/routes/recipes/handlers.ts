import prisma from "../../database";
import type { RecipeParams, RecipeSearchQuery, RecipeBody } from "./types";

// GET /api/recipes
export const getAllRecipe = async () => {
  const recipes = await prisma.recipe.findMany({
    include: { ingredients: { include: { ingredient: true } } },
    orderBy: { createdAt: "desc" },
  });

  return recipes;
};

// GET /api/recipes/:id
export const getRecipe = async ({ params }: RecipeParams) => {
  const recipe = await prisma.recipe.findUnique({
    where: { id: params.id },
    include: {
      ingredients: { include: { ingredient: true } },
      userRequest: true,
    },
  });

  if (!recipe) {
    throw new Error("Receita não encontrada");
  }

  return recipe;
};

// POST /api/recipes
export const postRecipe = async ({ body }: RecipeBody) => {
  const recipe = await prisma.recipe.create({
    data: {
      title: body.title,
      description: body.description,
      instructions: body.instructions,
      servings: body.servings,
      prepTime: body.prepTime,
      cookTime: body.cookTime,
      ingredients: {
        create: body.ingredients.map((i) => ({
          quantity: i.quantity,
          unit: i.unit,
          notes: i.notes,
          ingredient: { connect: { id: i.ingredientId } },
        })),
      },
    },
    include: { ingredients: { include: { ingredient: true } } },
  });

  return recipe;
};

// PUT /api/recipes/:id
export const patchRecipe = async ({ params, body }: RecipeParams & RecipeBody) => {
  const existing = await prisma.recipe.findUnique({
    where: { id: params.id },
  });

  if (!existing) {
    throw new Error("Receita não encontrada");
  }

  const recipe = await prisma.$transaction(async (tx) => {
    await tx.recipeIngredient.deleteMany({
      where: { recipeId: params.id },
    });

    return tx.recipe.update({
      where: { id: params.id },
      data: {
        title: body.title,
        description: body.description,
        instructions: body.instructions,
        servings: body.servings,
        prepTime: body.prepTime,
        cookTime: body.cookTime,
        ingredients: {
          create: body.ingredients.map((i) => ({
            quantity: i.quantity,
            unit: i.unit,
            notes: i.notes,
            ingredient: { connect: { id: i.ingredientId } },
          })),
        },
      },
      include: { ingredients: { include: { ingredient: true } } },
    });
  });

  return recipe;
};

// DELETE /api/recipes/:id
export const deleteRecipe = async ({ params }: RecipeParams) => {
  const existing = await prisma.recipe.findUnique({
    where: { id: params.id },
  });

  if (!existing) {
    throw new Error("Receita não encontrada");
  }

  await prisma.recipe.delete({ where: { id: params.id } });

  return { message: "Receita removida" };
};

// GET /api/recipes/search?q=macarrao
export const searchRecipe = async ({ query }: RecipeSearchQuery) => {
  const recipes = await prisma.recipe.findMany({
    where: {
      OR: [
        { title: { contains: query.q } },
        { description: { contains: query.q } },
      ],
    },
    include: { ingredients: { include: { ingredient: true } } },
    orderBy: { createdAt: "desc" },
  });

  return recipes;
};

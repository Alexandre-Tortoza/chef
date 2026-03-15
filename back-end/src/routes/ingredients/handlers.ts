import prisma from "../../database";
import type { IngredientParams, IngredientQuery, IngredientBody } from "./types";

// GET /api/ingredients
export const getAllIngredients = async ({ query }: IngredientQuery) => {
  const where = query.category ? { category: query.category } : {};
  const items = await prisma.ingredient.findMany({
    where,
    orderBy: { name: "asc" },
  });

  return items;
};

// GET /api/ingredients/:id
export const getIngredient = async ({ params }: IngredientParams) => {
  const ingredient = await prisma.ingredient.findUnique({
    where: { id: params.id },
    include: {
      stockItems: true,
      recipeIngredients: true,
      blacklistItems: true,
    },
  });

  if (!ingredient) {
    throw new Error("Ingrediente não encontrado");
  }

  return ingredient;
};

// POST /api/ingredients
export const postIngredient = async ({ body }: IngredientBody) => {
  const existing = await prisma.ingredient.findUnique({
    where: { name: body.name },
  });

  if (existing) {
    throw new Error("Ingrediente já existe");
  }

  const ingredient = await prisma.ingredient.create({
    data: {
      name: body.name,
      category: body.category,
      defaultUnit: body.defaultUnit,
    },
  });

  return ingredient;
};

// PUT /api/ingredients/:id
export const patchIngredient = async ({ params, body }: IngredientParams & IngredientBody) => {
  const existing = await prisma.ingredient.findUnique({
    where: { id: params.id },
  });

  if (!existing) {
    throw new Error("Ingrediente não encontrado");
  }

  const ingredient = await prisma.ingredient.update({
    where: { id: params.id },
    data: {
      name: body.name,
      category: body.category,
      defaultUnit: body.defaultUnit,
    },
  });

  return ingredient;
};

// DELETE /api/ingredients/:id
export const deleteIngredient = async ({ params }: IngredientParams) => {
  const existing = await prisma.ingredient.findUnique({
    where: { id: params.id },
  });

  if (!existing) {
    throw new Error("Ingrediente não encontrado");
  }

  await prisma.ingredient.delete({
    where: { id: params.id },
  });

  return { message: "Ingrediente removido" };
};

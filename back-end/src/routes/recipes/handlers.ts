import type { Context } from "elysia";
import prisma from "../../database";

// ============================================================================
// HANDLERS - RECIPES
// ============================================================================
// Cada handler recebe o context do Elysia (body, params, query, etc.)
// Use prisma.recipe para acessar o model no banco
// Lembre de incluir os ingredients ao buscar receitas: { include: { ingredients: { include: { ingredient: true } } } }

// GET /api/recipes
// Listar todas as receitas
// - Use query params para paginação (skip, take)
// - Inclua os ingredientes na resposta
export const listRecipes = async () => {
  // TODO: implementar
  // const recipes = await prisma.recipe.findMany({
  //   include: { ingredients: { include: { ingredient: true } } },
  //   orderBy: { createdAt: "desc" },
  // });
};

// GET /api/recipes/:id
// Buscar receita por ID
// - Inclua ingredientes e a relação com userRequest
// - Retorne 404 se não encontrar
export const getRecipe = async ({ params }: { params: { id: string } }) => {
  // TODO: implementar
  // const recipe = await prisma.recipe.findUnique({
  //   where: { id: params.id },
  //   include: {
  //     ingredients: { include: { ingredient: true } },
  //     userRequest: true,
  //   },
  // });
};

// POST /api/recipes
// Criar nova receita
// - Body: { title, description?, instructions, servings?, prepTime?, cookTime?, ingredients: [{ ingredientId, quantity, unit?, notes? }] }
// - Crie a receita e os RecipeIngredient em uma transaction
// - Se o ingrediente não existir, crie ele antes (connectOrCreate)
export const createRecipe = async ({ body }: { body: any }) => {
  // TODO: implementar
  // Use prisma.$transaction ou nested create:
  // await prisma.recipe.create({
  //   data: {
  //     title: body.title,
  //     instructions: body.instructions,
  //     ...
  //     ingredients: {
  //       create: body.ingredients.map(i => ({
  //         quantity: i.quantity,
  //         unit: i.unit,
  //         ingredient: { connect: { id: i.ingredientId } },
  //       })),
  //     },
  //   },
  // });
};

// PUT /api/recipes/:id
// Atualizar receita existente
// - Atualize apenas os campos enviados no body
// - Para ingredientes: delete os antigos e recrie (strategy simples)
export const updateRecipe = async ({ params, body }: { params: { id: string }; body: any }) => {
  // TODO: implementar
};

// DELETE /api/recipes/:id
// Deletar receita (cascade deleta RecipeIngredients automaticamente)
export const deleteRecipe = async ({ params }: { params: { id: string } }) => {
  // TODO: implementar
  // await prisma.recipe.delete({ where: { id: params.id } });
};

// GET /api/recipes/search?q=macarrao
// Buscar receitas por termo (título ou descrição)
// - Use contains para busca parcial
export const searchRecipes = async ({ query }: { query: { q: string } }) => {
  // TODO: implementar
  // await prisma.recipe.findMany({
  //   where: {
  //     OR: [
  //       { title: { contains: query.q } },
  //       { description: { contains: query.q } },
  //     ],
  //   },
  // });
};

import prisma from "../../database";

// ============================================================================
// HANDLERS - INGREDIENTS
// ============================================================================
// Ingredientes são o "catálogo" de itens que o sistema conhece
// A IA cria ingredientes automaticamente ao montar receitas
// O frontend usa pra mostrar ingredientes disponíveis e categorizar

// GET /api/ingredients
// Listar todos os ingredientes
// - Use query.category para filtrar por categoria (opcional)
// - Ordene por nome
export const listIngredients = async ({ query }: { query: { category?: string } }) => {
  // TODO: implementar
  // const where = query.category ? { category: query.category } : {};
  // await prisma.ingredient.findMany({ where, orderBy: { name: "asc" } });
};

// GET /api/ingredients/:id
// Buscar ingrediente por ID
// - Inclua as relações: stockItems, recipeIngredients, blacklistItems
// - Útil pra saber se o ingrediente tá no estoque, em quais receitas aparece, etc.
export const getIngredient = async ({ params }: { params: { id: string } }) => {
  // TODO: implementar
};

// POST /api/ingredients
// Criar novo ingrediente
// - Body: { name, category?, defaultUnit? }
// - name é unique, valide duplicata
export const createIngredient = async ({ body }: { body: any }) => {
  // TODO: implementar
  // await prisma.ingredient.create({ data: body });
};

// PUT /api/ingredients/:id
// Atualizar ingrediente (nome, categoria, unidade padrão)
export const updateIngredient = async ({ params, body }: { params: { id: string }; body: any }) => {
  // TODO: implementar
};

// DELETE /api/ingredients/:id
// Deletar ingrediente
// - Cuidado: cascade pode deletar stockItems e shoppingItems
// - Considere verificar se está em uso antes de deletar
export const deleteIngredient = async ({ params }: { params: { id: string } }) => {
  // TODO: implementar
};

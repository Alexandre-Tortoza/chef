import prisma from "../../database";

// ============================================================================
// HANDLERS - BLACKLIST (Lista Negra)
// ============================================================================
// Ingredientes que o usuário NÃO quer (alergia, preferência, etc.)
// A IA DEVE consultar a blacklist antes de sugerir receitas
// Se um ingrediente está na blacklist, a IA não pode usá-lo

// GET /api/blacklist
// Listar todos os itens na blacklist
// - Inclua o ingrediente (nome, categoria)
export const listBlacklist = async () => {
  // TODO: implementar
  // await prisma.blacklistItem.findMany({
  //   include: { ingredient: true },
  //   orderBy: { createdAt: "desc" },
  // });
};

// POST /api/blacklist
// Adicionar ingrediente à blacklist
// - Body: { ingredientId, reason? }
// - ingredientId é unique na blacklist, não pode duplicar
// - Se o ingrediente não existir no catálogo, crie ele primeiro
export const addToBlacklist = async ({ body }: { body: any }) => {
  // TODO: implementar
};

// DELETE /api/blacklist/:id
// Remover ingrediente da blacklist (voltou a querer/poder comer)
export const removeFromBlacklist = async ({ params }: { params: { id: string } }) => {
  // TODO: implementar
};

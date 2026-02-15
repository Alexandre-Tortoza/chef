import prisma from "../../database";

// ============================================================================
// HANDLERS - SUGGESTIONS (Sugestões da IA)
// ============================================================================
// Sugestões geradas pela IA com base no estoque, preferências, etc.
// Tipos: "recipe" | "shopping" | "expiring" | "plan"
// O frontend exibe as sugestões como cards que o usuário pode aceitar ou dispensar

// GET /api/suggestions
// Listar sugestões ativas (não dispensadas)
// - Filtre por type se query.type vier
// - Ordene por mais recente
export const listSuggestions = async ({ query }: { query: { type?: string } }) => {
  // TODO: implementar
  // await prisma.suggestion.findMany({
  //   where: {
  //     dismissed: false,
  //     ...(query.type ? { type: query.type } : {}),
  //   },
  //   orderBy: { createdAt: "desc" },
  // });
};

// POST /api/suggestions
// Criar nova sugestão (chamado internamente pelas tools da IA)
// - Body: { title, description, type, recipeIds?, ingredients? }
// - recipeIds e ingredients são strings JSON (limitação SQLite)
export const createSuggestion = async ({ body }: { body: any }) => {
  // TODO: implementar
};

// PATCH /api/suggestions/:id/dismiss
// Dispensar sugestão (o usuário não quer)
export const dismissSuggestion = async ({ params }: { params: { id: string } }) => {
  // TODO: implementar
  // await prisma.suggestion.update({
  //   where: { id: params.id },
  //   data: { dismissed: true },
  // });
};

// DELETE /api/suggestions/:id
// Deletar sugestão permanentemente
export const deleteSuggestion = async ({ params }: { params: { id: string } }) => {
  // TODO: implementar
};

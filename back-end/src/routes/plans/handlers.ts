import prisma from "../../database";

// ============================================================================
// HANDLERS - RECURRING PLANS (Planos Recorrentes / Dietas)
// ============================================================================
// Planos de refeição recorrentes (ex: "Dieta da semana", "Almoços de segunda a sexta")
// Cada plano tem items que definem qual receita em qual dia/refeição

// GET /api/plans
// Listar todos os planos
// - Filtre por active (query.active = "true" | "false")
export const listPlans = async ({ query }: { query: { active?: string } }) => {
  // TODO: implementar
  // const where = query.active !== undefined ? { active: query.active === "true" } : {};
  // await prisma.recurringPlan.findMany({
  //   where,
  //   include: { _count: { select: { items: true } } },
  //   orderBy: { createdAt: "desc" },
  // });
};

// GET /api/plans/:id
// Buscar plano por ID com todos os itens
// - Inclua os items com detalhes (dia, tipo de refeição, recipeId)
export const getPlan = async ({ params }: { params: { id: string } }) => {
  // TODO: implementar
  // await prisma.recurringPlan.findUnique({
  //   where: { id: params.id },
  //   include: { items: { orderBy: [{ dayOfWeek: "asc" }, { mealType: "asc" }] } },
  // });
};

// POST /api/plans
// Criar novo plano recorrente
// - Body: { name, description?, frequency, startDate, endDate? }
// - frequency: "daily" | "weekly" | "monthly"
export const createPlan = async ({ body }: { body: any }) => {
  // TODO: implementar
};

// PUT /api/plans/:id
// Atualizar plano (nome, frequência, datas, ativo/inativo)
export const updatePlan = async ({ params, body }: { params: { id: string }; body: any }) => {
  // TODO: implementar
};

// DELETE /api/plans/:id
// Deletar plano (cascade deleta os items)
export const deletePlan = async ({ params }: { params: { id: string } }) => {
  // TODO: implementar
};

// --- PLAN ITEMS ---

// POST /api/plans/:planId/items
// Adicionar item ao plano
// - Body: { recipeId, dayOfWeek?, dayOfMonth?, mealType? }
// - dayOfWeek: 0-6 (domingo a sábado)
// - mealType: "breakfast" | "lunch" | "dinner" | "snack"
export const addPlanItem = async ({ params, body }: { params: { planId: string }; body: any }) => {
  // TODO: implementar
};

// DELETE /api/plans/:planId/items/:itemId
// Remover item do plano
export const removePlanItem = async ({
  params,
}: {
  params: { planId: string; itemId: string };
}) => {
  // TODO: implementar
};

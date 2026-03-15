import prisma from "../../database";
import type { PlanParams, PlanQuery, PlanBody, PlanItemParams, PlanItemBody } from "./types";

// GET /api/plans
export const getAllPlan = async ({ query }: PlanQuery) => {
  const where = query.active !== undefined ? { active: query.active === "true" } : {};
  const plans = await prisma.recurringPlan.findMany({
    where,
    include: { _count: { select: { items: true } } },
    orderBy: { createdAt: "desc" },
  });

  return plans;
};

// GET /api/plans/:id
export const getPlan = async ({ params }: PlanParams) => {
  const plan = await prisma.recurringPlan.findUnique({
    where: { id: params.id },
    include: {
      items: { orderBy: [{ dayOfWeek: "asc" }, { mealType: "asc" }] },
    },
  });

  if (!plan) {
    throw new Error("Plano não encontrado");
  }

  return plan;
};

// POST /api/plans
export const postPlan = async ({ body }: PlanBody) => {
  const plan = await prisma.recurringPlan.create({
    data: {
      name: body.name,
      description: body.description,
      frequency: body.frequency,
      startDate: new Date(body.startDate),
      endDate: body.endDate ? new Date(body.endDate) : undefined,
    },
  });

  return plan;
};

// PUT /api/plans/:id
export const patchPlan = async ({ params, body }: PlanParams & PlanBody) => {
  const existing = await prisma.recurringPlan.findUnique({
    where: { id: params.id },
  });

  if (!existing) {
    throw new Error("Plano não encontrado");
  }

  const plan = await prisma.recurringPlan.update({
    where: { id: params.id },
    data: {
      name: body.name,
      description: body.description,
      frequency: body.frequency,
      startDate: new Date(body.startDate),
      endDate: body.endDate ? new Date(body.endDate) : undefined,
      active: body.active,
    },
  });

  return plan;
};

// DELETE /api/plans/:id
export const deletePlan = async ({ params }: PlanParams) => {
  const existing = await prisma.recurringPlan.findUnique({
    where: { id: params.id },
  });

  if (!existing) {
    throw new Error("Plano não encontrado");
  }

  await prisma.recurringPlan.delete({
    where: { id: params.id },
  });

  return { message: "Plano removido" };
};

// --- PLAN ITEMS ---

// POST /api/plans/:planId/items
export const postPlanItem = async ({ params, body }: { params: { id: string } } & PlanItemBody) => {
  const plan = await prisma.recurringPlan.findUnique({
    where: { id: params.id },
  });

  if (!plan) {
    throw new Error("Plano não encontrado");
  }

  const item = await prisma.recurringPlanItem.create({
    data: {
      recurringPlanId: params.id,
      recipeId: body.recipeId,
      dayOfWeek: body.dayOfWeek,
      dayOfMonth: body.dayOfMonth,
      mealType: body.mealType,
    },
  });

  return item;
};

// DELETE /api/plans/:planId/items/:itemId
export const deletePlanItem = async ({ params }: PlanItemParams) => {
  const existing = await prisma.recurringPlanItem.findUnique({
    where: { id: params.itemId },
  });

  if (!existing) {
    throw new Error("Item não encontrado no plano");
  }

  await prisma.recurringPlanItem.delete({
    where: { id: params.itemId },
  });

  return { message: "Item removido do plano" };
};

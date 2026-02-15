import { Elysia } from "elysia";
import {
  listPlans,
  getPlan,
  createPlan,
  updatePlan,
  deletePlan,
  addPlanItem,
  removePlanItem,
} from "./handlers";

// ============================================================================
// ROTAS - PLANS (prefixo: /api/plans)
// ============================================================================
// Planos de refeição recorrentes (dietas semanais, etc.)

const plansRoutes = new Elysia({ prefix: "/plans" })
  .get("/", listPlans)
  .get("/:id", getPlan)
  .post("/", createPlan)
  .put("/:id", updatePlan)
  .delete("/:id", deletePlan)

  // --- Itens do plano ---
  .post("/:planId/items", addPlanItem)
  .delete("/:planId/items/:itemId", removePlanItem);

export default plansRoutes;

import { Elysia, t } from "elysia";
import {
  getAllPlan,
  getPlan,
  postPlan,
  patchPlan,
  deletePlan,
  postPlanItem,
  deletePlanItem,
} from "./handlers";

const planBodySchema = t.Object({
  name: t.String(),
  description: t.Optional(t.String()),
  frequency: t.String(),
  startDate: t.String(),
  endDate: t.Optional(t.String()),
  active: t.Optional(t.Boolean()),
});

const plansRoutes = new Elysia({ prefix: "/plans" })
  .get("/", getAllPlan)
  .get("/:id", getPlan)
  .post("/", postPlan, { body: planBodySchema })
  .put("/:id", patchPlan, { body: planBodySchema })
  .delete("/:id", deletePlan)
  .post("/:id/items", postPlanItem, {
    body: t.Object({
      recipeId: t.String(),
      dayOfWeek: t.Optional(t.Number()),
      dayOfMonth: t.Optional(t.Number()),
      mealType: t.Optional(t.String()),
    }),
  })
  .delete("/:id/items/:itemId", deletePlanItem);

export default plansRoutes;

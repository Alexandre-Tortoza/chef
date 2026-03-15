import { Elysia, t } from "elysia";
import {
  getAllIngredients,
  getIngredient,
  postIngredient,
  patchIngredient,
  deleteIngredient,
} from "./handlers";

const ingredientsRoutes = new Elysia({ prefix: "/ingredients" })
  .get("/", getAllIngredients)
  .get("/:id", getIngredient)
  .post("/", postIngredient, {
    body: t.Object({
      name: t.String(),
      category: t.Optional(t.String()),
      defaultUnit: t.Optional(t.String()),
    }),
  })
  .put("/:id", patchIngredient, {
    body: t.Object({
      name: t.String(),
      category: t.Optional(t.String()),
      defaultUnit: t.Optional(t.String()),
    }),
  })
  .delete("/:id", deleteIngredient);

export default ingredientsRoutes;

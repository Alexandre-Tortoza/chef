import { Elysia } from "elysia";
import {
  listIngredients,
  getIngredient,
  createIngredient,
  updateIngredient,
  deleteIngredient,
} from "./handlers";

// ============================================================================
// ROTAS - INGREDIENTS (prefixo: /api/ingredients)
// ============================================================================
// Catálogo de ingredientes conhecidos pelo sistema

const ingredientsRoutes = new Elysia({ prefix: "/ingredients" })
  .get("/", listIngredients)
  .get("/:id", getIngredient)
  .post("/", createIngredient)
  .put("/:id", updateIngredient)
  .delete("/:id", deleteIngredient);

export default ingredientsRoutes;

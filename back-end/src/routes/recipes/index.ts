import { Elysia } from "elysia";
import {
  listRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  searchRecipes,
} from "./handlers";

// ============================================================================
// ROTAS - RECIPES (prefixo: /api/recipes)
// ============================================================================
// CRUD completo de receitas
// A IA cria receitas via tools, o frontend consome via essas rotas

const recipesRoutes = new Elysia({ prefix: "/recipes" })
  // Busca por termo - deve vir ANTES de /:id para não conflitar
  .get("/search", searchRecipes)

  .get("/", listRecipes)
  .get("/:id", getRecipe)
  .post("/", createRecipe)
  .put("/:id", updateRecipe)
  .delete("/:id", deleteRecipe);

export default recipesRoutes;

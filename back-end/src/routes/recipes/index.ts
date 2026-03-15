import { Elysia, t } from "elysia";
import {
  getAllRecipe,
  getRecipe,
  postRecipe,
  patchRecipe,
  deleteRecipe,
  searchRecipe,
} from "./handlers";

const ingredientSchema = t.Object({
  ingredientId: t.String(),
  quantity: t.String(),
  unit: t.Optional(t.String()),
  notes: t.Optional(t.String()),
});

const recipeBodySchema = t.Object({
  title: t.String(),
  description: t.Optional(t.String()),
  instructions: t.String(),
  servings: t.Optional(t.Number()),
  prepTime: t.Optional(t.Number()),
  cookTime: t.Optional(t.Number()),
  ingredients: t.Array(ingredientSchema),
});

const recipesRoutes = new Elysia({ prefix: "/recipes" })
  .get("/search", searchRecipe)
  .get("/", getAllRecipe)
  .get("/:id", getRecipe)
  .post("/", postRecipe, { body: recipeBodySchema })
  .put("/:id", patchRecipe, { body: recipeBodySchema })
  .delete("/:id", deleteRecipe);

export default recipesRoutes;

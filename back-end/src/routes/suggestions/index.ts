import { Elysia, t } from "elysia";
import {
  getAllSuggestion,
  postSuggestion,
  patchSuggestion,
  deleteSuggestion,
} from "./handlers";

const suggestionsRoutes = new Elysia({ prefix: "/suggestions" })
  .get("/", getAllSuggestion)
  .post("/", postSuggestion, {
    body: t.Object({
      title: t.String(),
      description: t.String(),
      type: t.String(),
      recipeIds: t.Optional(t.String()),
      ingredients: t.Optional(t.String()),
    }),
  })
  .patch("/:id/dismiss", patchSuggestion)
  .delete("/:id", deleteSuggestion);

export default suggestionsRoutes;

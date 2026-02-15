import { Elysia } from "elysia";
import {
  listSuggestions,
  createSuggestion,
  dismissSuggestion,
  deleteSuggestion,
} from "./handlers";

// ============================================================================
// ROTAS - SUGGESTIONS (prefixo: /api/suggestions)
// ============================================================================
// Sugestões geradas pela IA (receitas, listas, aproveitamento de estoque)

const suggestionsRoutes = new Elysia({ prefix: "/suggestions" })
  .get("/", listSuggestions)
  .post("/", createSuggestion)
  .patch("/:id/dismiss", dismissSuggestion)
  .delete("/:id", deleteSuggestion);

export default suggestionsRoutes;

import { Elysia } from "elysia";
import {
  listBlacklist,
  addToBlacklist,
  removeFromBlacklist,
} from "./handlers";

// ============================================================================
// ROTAS - BLACKLIST (prefixo: /api/blacklist)
// ============================================================================
// Ingredientes proibidos (alergia, restrição, preferência)
// Apenas GET, POST e DELETE - não faz sentido editar, só add/remove

const blacklistRoutes = new Elysia({ prefix: "/blacklist" })
  .get("/", listBlacklist)
  .post("/", addToBlacklist)
  .delete("/:id", removeFromBlacklist);

export default blacklistRoutes;

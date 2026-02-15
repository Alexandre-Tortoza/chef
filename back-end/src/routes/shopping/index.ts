import { Elysia } from "elysia";
import {
  listShoppingLists,
  getShoppingList,
  createShoppingList,
  updateShoppingList,
  deleteShoppingList,
  addShoppingItem,
  updateShoppingItem,
  purchaseShoppingItem,
  deleteShoppingItem,
} from "./handlers";

// ============================================================================
// ROTAS - SHOPPING (prefixo: /api/shopping)
// ============================================================================
// Lista de compras e seus itens
// A IA monta essas listas, o frontend gerencia (marcar comprado, etc.)

const shoppingRoutes = new Elysia({ prefix: "/shopping" })
  // --- Listas ---
  .get("/", listShoppingLists)
  .get("/:id", getShoppingList)
  .post("/", createShoppingList)
  .put("/:id", updateShoppingList)
  .delete("/:id", deleteShoppingList)

  // --- Itens dentro de uma lista ---
  .post("/:listId/items", addShoppingItem)
  .put("/:listId/items/:itemId", updateShoppingItem)
  .patch("/:listId/items/:itemId/purchase", purchaseShoppingItem)
  .delete("/:listId/items/:itemId", deleteShoppingItem);

export default shoppingRoutes;

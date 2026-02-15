import { Elysia } from "elysia";
import {
  listStock,
  getStockItem,
  createStockItem,
  updateStockItem,
  deleteStockItem,
  getExpiringItems,
} from "./handlers";

// ============================================================================
// ROTAS - STOCK (prefixo: /api/stock)
// ============================================================================
// Gerencia o estoque do usuário (o que tem em casa)

const stockRoutes = new Elysia({ prefix: "/stock" })
  // Itens perto de vencer - antes de /:id
  .get("/expiring", getExpiringItems)

  .get("/", listStock)
  .get("/:id", getStockItem)
  .post("/", createStockItem)
  .put("/:id", updateStockItem)
  .delete("/:id", deleteStockItem);

export default stockRoutes;

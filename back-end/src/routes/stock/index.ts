import { Elysia, t } from "elysia";
import {
  getAllStock,
  getStock,
  postStock,
  patchStock,
  deleteStock,
  getExpiringStock,
} from "./handlers";

const stockRoutes = new Elysia({ prefix: "/stock" })
  .get("/expiring", getExpiringStock)
  .get("/", getAllStock)
  .get("/:id", getStock)
  .post("/", postStock, {
    body: t.Object({
      ingredientId: t.String(),
      quantity: t.String(),
      unit: t.Optional(t.String()),
      expiryDate: t.Optional(t.String()),
      location: t.Optional(t.String()),
    }),
  })
  .put("/:id", patchStock, {
    body: t.Object({
      ingredientId: t.String(),
      quantity: t.String(),
      unit: t.Optional(t.String()),
      expiryDate: t.Optional(t.String()),
      location: t.Optional(t.String()),
    }),
  })
  .delete("/:id", deleteStock);

export default stockRoutes;

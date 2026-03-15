import { Elysia, t } from "elysia";
import {
  getAllShoppingList,
  getShoppingList,
  postShoppingList,
  patchShoppingList,
  deleteShoppingList,
  postShoppingItem,
  patchShoppingItem,
  purchaseShoppingItem,
  deleteShoppingItem,
} from "./handlers";

const shoppingItemBodySchema = t.Object({
  ingredientId: t.String(),
  quantity: t.String(),
  unit: t.Optional(t.String()),
  notes: t.Optional(t.String()),
  priority: t.Optional(t.Number()),
  recipeId: t.Optional(t.String()),
});

const shoppingRoutes = new Elysia({ prefix: "/shopping" })
  .get("/", getAllShoppingList)
  .get("/:id", getShoppingList)
  .post("/", postShoppingList, {
    body: t.Object({
      name: t.String(),
      status: t.Optional(t.String()),
      recurrence: t.Optional(t.String()),
    }),
  })
  .put("/:id", patchShoppingList, {
    body: t.Object({
      name: t.String(),
      status: t.Optional(t.String()),
      recurrence: t.Optional(t.String()),
    }),
  })
  .delete("/:id", deleteShoppingList)
  .post("/:id/items", postShoppingItem, { body: shoppingItemBodySchema })
  .put("/:id/items/:itemId", patchShoppingItem, { body: shoppingItemBodySchema })
  .patch("/:id/items/:itemId/purchase", purchaseShoppingItem)
  .delete("/:id/items/:itemId", deleteShoppingItem);

export default shoppingRoutes;

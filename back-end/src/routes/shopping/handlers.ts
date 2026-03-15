import prisma from "../../database";
import type {
  ShoppingListParams,
  ShoppingListQuery,
  ShoppingListBody,
  ShoppingItemParams,
  ShoppingItemBody,
} from "./types";

// --- SHOPPING LIST ---

// GET /api/shopping
export const getAllShoppingList = async ({ query }: ShoppingListQuery) => {
  const where = query.status ? { status: query.status } : {};
  const lists = await prisma.shoppingList.findMany({
    where,
    include: { _count: { select: { items: true } } },
    orderBy: { createdAt: "desc" },
  });

  return lists;
};

// GET /api/shopping/:id
export const getShoppingList = async ({ params }: ShoppingListParams) => {
  const list = await prisma.shoppingList.findUnique({
    where: { id: params.id },
    include: {
      items: {
        include: { ingredient: true },
        orderBy: [{ purchased: "asc" }, { priority: "desc" }],
      },
    },
  });

  console.log(list)

  if (!list) {
    throw new Error("Lista não encontrada");
  }

  return list;
};

// POST /api/shopping
export const postShoppingList = async ({ body }: ShoppingListBody) => {
  const list = await prisma.shoppingList.create({
    data: {
      name: body.name,
      recurrence: body.recurrence,
    },
  });

  return list;
};

// PUT /api/shopping/:id
export const patchShoppingList = async ({ params, body }: ShoppingListParams & ShoppingListBody) => {
  const existing = await prisma.shoppingList.findUnique({
    where: { id: params.id },
  });

  if (!existing) {
    throw new Error("Lista não encontrada");
  }

  const list = await prisma.shoppingList.update({
    where: { id: params.id },
    data: {
      name: body.name,
      status: body.status,
      recurrence: body.recurrence,
    },
  });

  return list;
};

// DELETE /api/shopping/:id
export const deleteShoppingList = async ({ params }: ShoppingListParams) => {
  const existing = await prisma.shoppingList.findUnique({
    where: { id: params.id },
  });

  if (!existing) {
    throw new Error("Lista não encontrada");
  }

  await prisma.shoppingList.delete({
    where: { id: params.id },
  });

  return { message: "Lista removida" };
};

// --- SHOPPING ITEMS ---

// POST /api/shopping/:listId/items
export const postShoppingItem = async ({ params, body }: { params: { id: string } } & ShoppingItemBody) => {
  const list = await prisma.shoppingList.findUnique({
    where: { id: params.id },
  });

  if (!list) {
    throw new Error("Lista não encontrada");
  }

  const item = await prisma.shoppingItem.create({
    data: {
      shoppingListId: params.id,
      ingredientId: body.ingredientId,
      quantity: body.quantity,
      unit: body.unit,
      notes: body.notes,
      priority: body.priority,
      recipeId: body.recipeId,
    },
    include: { ingredient: true },
  });

  return item;
};

// PUT /api/shopping/:listId/items/:itemId
export const patchShoppingItem = async ({ params, body }: ShoppingItemParams & ShoppingItemBody) => {
  const existing = await prisma.shoppingItem.findUnique({
    where: { id: params.itemId },
  });

  if (!existing) {
    throw new Error("Item não encontrado");
  }

  const item = await prisma.shoppingItem.update({
    where: { id: params.itemId },
    data: {
      quantity: body.quantity,
      unit: body.unit,
      notes: body.notes,
      priority: body.priority,
    },
    include: { ingredient: true },
  });

  return item;
};

// PATCH /api/shopping/:listId/items/:itemId/purchase
export const purchaseShoppingItem = async ({ params }: ShoppingItemParams) => {
  const item = await prisma.shoppingItem.findUnique({
    where: { id: params.itemId },
    include: { ingredient: true },
  });

  if (!item) {
    throw new Error("Item não encontrado");
  }

  const [updatedItem, stockItem] = await prisma.$transaction([
    prisma.shoppingItem.update({
      where: { id: params.itemId },
      data: { purchased: true },
      include: { ingredient: true },
    }),
    prisma.stockItem.create({
      data: {
        ingredientId: item.ingredientId,
        quantity: item.quantity,
        unit: item.unit,
      },
      include: { ingredient: true },
    }),
  ]);

  return { item: updatedItem, stockItem };
};

// DELETE /api/shopping/:listId/items/:itemId
export const deleteShoppingItem = async ({ params }: ShoppingItemParams) => {
  const existing = await prisma.shoppingItem.findUnique({
    where: { id: params.itemId },
  });

  if (!existing) {
    throw new Error("Item não encontrado");
  }

  await prisma.shoppingItem.delete({
    where: { id: params.itemId },
  });

  return { message: "Item removido" };
};

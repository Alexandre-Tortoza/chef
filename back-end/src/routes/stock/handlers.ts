import prisma from "../../database";
import type { StockParams, StockQuery, StockBody } from "./types";

// GET /api/stock
export const getAllStock = async ({ query }: StockQuery) => {
  const where = query.location ? { location: query.location } : {};
  const items = await prisma.stockItem.findMany({
    where,
    include: { ingredient: true },
    orderBy: { expiryDate: "asc" },
  });

  return items;
};

// GET /api/stock/:id
export const getStock = async ({ params }: StockParams) => {
  const item = await prisma.stockItem.findUnique({
    where: { id: params.id },
    include: { ingredient: true },
  });

  if (!item) {
    throw new Error("Item não encontrado no estoque");
  }

  return item;
};

// POST /api/stock
export const postStock = async ({ body }: StockBody) => {
  const ingredient = await prisma.ingredient.findUnique({
    where: { id: body.ingredientId },
  });

  if (!ingredient) {
    throw new Error("Ingrediente não encontrado");
  }

  const item = await prisma.stockItem.create({
    data: {
      ingredientId: body.ingredientId,
      quantity: body.quantity,
      unit: body.unit,
      expiryDate: body.expiryDate ? new Date(body.expiryDate) : undefined,
      location: body.location,
    },
    include: { ingredient: true },
  });

  return item;
};

// PUT /api/stock/:id
export const patchStock = async ({ params, body }: StockParams & StockBody) => {
  const existing = await prisma.stockItem.findUnique({
    where: { id: params.id },
  });

  if (!existing) {
    throw new Error("Item não encontrado no estoque");
  }

  const item = await prisma.stockItem.update({
    where: { id: params.id },
    data: {
      quantity: body.quantity,
      unit: body.unit,
      expiryDate: body.expiryDate ? new Date(body.expiryDate) : undefined,
      location: body.location,
    },
    include: { ingredient: true },
  });

  return item;
};

// DELETE /api/stock/:id
export const deleteStock = async ({ params }: StockParams) => {
  const existing = await prisma.stockItem.findUnique({
    where: { id: params.id },
  });

  if (!existing) {
    throw new Error("Item não encontrado no estoque");
  }

  await prisma.stockItem.delete({
    where: { id: params.id },
  });

  return { message: "Removido do estoque" };
};

// GET /api/stock/expiring
export const getExpiringStock = async () => {
  const sevenDaysFromNow = new Date();
  sevenDaysFromNow.setDate(sevenDaysFromNow.getDate() + 7);

  const items = await prisma.stockItem.findMany({
    where: {
      expiryDate: {
        lte: sevenDaysFromNow,
        not: null,
      },
    },
    include: { ingredient: true },
    orderBy: { expiryDate: "asc" },
  });

  return items;
};

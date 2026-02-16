import prisma from "../../database";

export const getBlacklist = async () => {
  const items = await prisma.blacklistItem.findMany({
    include: { ingredient: true },
    orderBy: { createdAt: "desc" },
  });

  return items;
};

export const postBlacklist = async ({
  body,
}: {
  body: { ingredientId: string; reason?: string };
}) => {
  const existing = await prisma.blacklistItem.findUnique({
    where: { ingredientId: body.ingredientId },
  });

  if (existing) {
    throw new Error("Ingrediente já está na blacklist");
  }

  const ingredient = await prisma.ingredient.findUnique({
    where: { id: body.ingredientId },
  });

  if (!ingredient) {
    throw new Error("Ingrediente não encontrado");
  }

  const item = await prisma.blacklistItem.create({
    data: {
      ingredientId: body.ingredientId,
      reason: body.reason,
    },
    include: { ingredient: true },
  });

  return item;
};

export const removeBlacklist = async ({
  params,
}: {
  params: { id: string };
}) => {
  const item = await prisma.blacklistItem.findUnique({
    where: { id: params.id },
  });

  if (!item) {
    throw new Error("Item não encontrado na blacklist");
  }

  await prisma.blacklistItem.delete({
    where: { id: params.id },
  });

  return { message: "Removido da blacklist" };
};

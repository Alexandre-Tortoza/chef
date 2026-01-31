import prisma from "../database";

export const saveMemory = async (conversationId: string, memory: string) => {
  const existing = await prisma.memorie.findFirst({
    where: { ownerId: conversationId },
  });

  if (existing) {
    return await prisma.memorie.update({
      where: { id: existing.id },
      data: { data: memory },
    });
  }

  return await prisma.memorie.create({
    data: {
      ownerId: conversationId,
      data: memory,
    },
  });
};

export const getMemories = async (conversationId: string) => {
  return await prisma.memorie.findMany({
    where: {
      ownerId: conversationId,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
};

export const clearMemories = async (conversationId: string) => {
  return await prisma.memorie.deleteMany({
    where: {
      ownerId: conversationId,
    },
  });
};

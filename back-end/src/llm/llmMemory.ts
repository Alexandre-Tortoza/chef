import prisma from "../database";

export const saveMemory = async (userRequestId: string, memory: string) => {
  const existing = await prisma.userRequest.findFirst({
    where: { id: userRequestId },
  });

  if (existing) {
    return await prisma.userRequest.update({
      where: { id: existing.id },
      data: { data: memory },
    });
  }

  return await prisma.userRequest.create({
    data: {
      id: userRequestId,
      data: memory,
    },
  });
};

export const getMemory = async (userRequestId: string) => {
  return await prisma.userRequest.findMany({
    where: {
      id: userRequestId,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
};

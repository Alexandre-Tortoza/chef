import { runLLM } from "../../llm/llm";
import prisma from "../../database";
import type { ChatBody, HistoryQuery } from "./types";

// POST /llm/chat
export const postChat= async ({ body }: ChatBody) => {
  const response = await runLLM(body.message);
  return { response };
};

// GET /llm/history
export const getAllHistory = async ({ query }: HistoryQuery) => {
  const skip = parseInt(query.skip || "0");
  const take = parseInt(query.take || "20");

  const history = await prisma.userRequest.findMany({
    orderBy: { createdAt: "desc" },
    skip,
    take,
  });

  return history;
};

// DELETE /llm/history
export const deleteHistory = async () => {
  await prisma.userRequest.deleteMany();
  return { message: "Histórico limpo" };
};

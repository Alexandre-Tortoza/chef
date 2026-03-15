import type { ITool } from "../types";
import prisma from "../../database";

export const blacklistTools: ITool[] = [
  {
    type: "function",
    function: {
      name: "get_blacklist",
      description:
        "Retorna todos os ingredientes na lista negra do usuário (alergias, restrições, preferências). SEMPRE verifique a blacklist antes de sugerir receitas para não incluir ingredientes proibidos.",
      parameters: {
        type: "object",
        properties: {},
        required: [],
      },
    },
  },
];

export const executeBlacklistTool = async (
  toolName: string,
  _args: Record<string, unknown>,
): Promise<string> => {
  if (toolName === "get_blacklist") {
    const blacklist = await prisma.blacklistItem.findMany({
      include: { ingredient: true },
    });
    return JSON.stringify(blacklist);
  }

  return JSON.stringify({ error: `Tool "${toolName}" não encontrada` });
};

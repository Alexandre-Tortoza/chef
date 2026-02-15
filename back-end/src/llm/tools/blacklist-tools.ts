import type { ITool } from "../types";
import prisma from "../../database";

// ============================================================================
// TOOLS - BLACKLIST
// ============================================================================
// Tool que a IA usa para verificar ingredientes proibidos
// A IA DEVE chamar isso antes de sugerir receitas para não incluir algo
// que o usuário tem alergia/restrição

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

// Executor da tool de blacklist
export const executeBlacklistTool = async (
  toolName: string,
  args: Record<string, unknown>,
): Promise<string> => {
  // TODO: implementar
  //
  // if (toolName === "get_blacklist") {
  //   const blacklist = await prisma.blacklistItem.findMany({
  //     include: { ingredient: true },
  //   });
  //   return JSON.stringify(blacklist);
  // }

  return JSON.stringify({ error: `Tool "${toolName}" não implementada` });
};

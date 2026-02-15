import type { ITool } from "../types";
import prisma from "../../database";

// ============================================================================
// TOOLS - ESTOQUE
// ============================================================================
// Tools que a IA usa para verificar o que o usuário tem em casa
// ESSENCIAL: a IA DEVE checar o estoque antes de montar a lista de compras

export const stockTools: ITool[] = [
  {
    type: "function",
    function: {
      name: "check_stock",
      description:
        "Verifica o estoque do usuário. Retorna todos os itens em estoque com quantidades. SEMPRE chame isso antes de montar uma lista de compras para não incluir o que o usuário já tem.",
      parameters: {
        type: "object",
        properties: {
          ingredientNames: {
            type: "array",
            items: { type: "string" },
            description:
              "Lista de nomes de ingredientes para verificar. Se vazio, retorna todo o estoque.",
          },
        },
        required: [],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "get_expiring_items",
      description:
        "Retorna itens do estoque que estão próximos de vencer (próximos 7 dias). Use quando quiser sugerir receitas para aproveitar ingredientes.",
      parameters: {
        type: "object",
        properties: {},
        required: [],
      },
    },
  },
];

// Executor das tools de estoque
export const executeStockTool = async (
  toolName: string,
  args: Record<string, unknown>,
): Promise<string> => {
  // TODO: implementar
  //
  // if (toolName === "check_stock") {
  //   const names = args.ingredientNames as string[] | undefined;
  //   const where = names?.length
  //     ? { ingredient: { name: { in: names } } }
  //     : {};
  //   const stock = await prisma.stockItem.findMany({
  //     where,
  //     include: { ingredient: true },
  //   });
  //   return JSON.stringify(stock);
  // }
  //
  // if (toolName === "get_expiring_items") {
  //   const sevenDays = new Date();
  //   sevenDays.setDate(sevenDays.getDate() + 7);
  //   const expiring = await prisma.stockItem.findMany({
  //     where: { expiryDate: { lte: sevenDays, not: null } },
  //     include: { ingredient: true },
  //   });
  //   return JSON.stringify(expiring);
  // }

  return JSON.stringify({ error: `Tool "${toolName}" não implementada` });
};

import type { ITool } from "../types";
import prisma from "../../database";

// ============================================================================
// TOOLS - LISTA DE COMPRAS
// ============================================================================
// Tools que a IA usa para montar e gerenciar listas de compras
// Fluxo principal:
//   1. IA cria receita (recipe-tools)
//   2. IA checa estoque (stock-tools)
//   3. IA cria lista com o que falta (shopping-tools)

export const shoppingTools: ITool[] = [
  {
    type: "function",
    function: {
      name: "create_shopping_list",
      description:
        "Cria uma nova lista de compras com itens. Use após criar uma receita e verificar o estoque. Inclua apenas os ingredientes que o usuário NÃO tem em estoque.",
      parameters: {
        type: "object",
        properties: {
          name: {
            type: "string",
            description: "Nome da lista (ex: 'Compras para Macarrão ao Molho Branco')",
          },
          items: {
            type: "array",
            description: "Itens para adicionar à lista",
            items: {
              type: "object",
              properties: {
                ingredientName: {
                  type: "string",
                  description: "Nome do ingrediente",
                },
                quantity: {
                  type: "string",
                  description: "Quantidade necessária",
                },
                unit: {
                  type: "string",
                  description: "Unidade de medida",
                },
                priority: {
                  type: "number",
                  description: "Prioridade (0 = normal, 1 = alta)",
                },
              },
              required: ["ingredientName", "quantity"],
            },
          },
          recipeId: {
            type: "string",
            description: "ID da receita de origem (opcional, para rastreio)",
          },
        },
        required: ["name", "items"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "add_shopping_items",
      description:
        "Adiciona itens a uma lista de compras existente.",
      parameters: {
        type: "object",
        properties: {
          shoppingListId: {
            type: "string",
            description: "ID da lista de compras",
          },
          items: {
            type: "array",
            description: "Itens para adicionar",
            items: {
              type: "object",
              properties: {
                ingredientName: { type: "string" },
                quantity: { type: "string" },
                unit: { type: "string" },
              },
              required: ["ingredientName", "quantity"],
            },
          },
        },
        required: ["shoppingListId", "items"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "get_active_shopping_lists",
      description:
        "Retorna todas as listas de compras ativas com seus itens. Use para verificar se já existe uma lista antes de criar uma nova.",
      parameters: {
        type: "object",
        properties: {},
        required: [],
      },
    },
  },
];

// Executor das tools de lista de compras
export const executeShoppingTool = async (
  toolName: string,
  args: Record<string, unknown>,
): Promise<string> => {
  // TODO: implementar
  //
  // if (toolName === "create_shopping_list") {
  //   // 1. Crie a ShoppingList
  //   // 2. Para cada item, busque/crie o Ingredient pelo nome
  //   // 3. Crie os ShoppingItems vinculados à lista
  //   // 4. Retorne a lista criada com os itens
  // }
  //
  // if (toolName === "add_shopping_items") {
  //   // 1. Busque a lista pelo ID
  //   // 2. Para cada item, busque/crie o Ingredient
  //   // 3. Crie os ShoppingItems
  // }
  //
  // if (toolName === "get_active_shopping_lists") {
  //   const lists = await prisma.shoppingList.findMany({
  //     where: { status: "active" },
  //     include: { items: { include: { ingredient: true } } },
  //   });
  //   return JSON.stringify(lists);
  // }

  return JSON.stringify({ error: `Tool "${toolName}" não implementada` });
};

import type { ITool } from "../types";
import prisma from "../../database";

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

type ShoppingItemInput = {
  ingredientName: string;
  quantity: string;
  unit?: string;
  priority?: number;
};

const findOrCreateIngredient = async (name: string) => {
  return prisma.ingredient.upsert({
    where: { name },
    update: {},
    create: { name },
  });
};

export const executeShoppingTool = async (
  toolName: string,
  args: Record<string, unknown>,
): Promise<string> => {
  if (toolName === "create_shopping_list") {
    const items = args.items as ShoppingItemInput[];
    const recipeId = args.recipeId as string | undefined;

    const list = await prisma.shoppingList.create({
      data: { name: args.name as string },
    });

    const createdItems = await Promise.all(
      items.map(async (item) => {
        const ingredient = await findOrCreateIngredient(item.ingredientName);
        return prisma.shoppingItem.create({
          data: {
            shoppingListId: list.id,
            ingredientId: ingredient.id,
            quantity: item.quantity,
            unit: item.unit,
            priority: item.priority ?? 0,
            recipeId,
          },
          include: { ingredient: true },
        });
      }),
    );

    return JSON.stringify({ ...list, items: createdItems });
  }

  if (toolName === "add_shopping_items") {
    const listId = args.shoppingListId as string;
    const items = args.items as ShoppingItemInput[];

    const createdItems = await Promise.all(
      items.map(async (item) => {
        const ingredient = await findOrCreateIngredient(item.ingredientName);
        return prisma.shoppingItem.create({
          data: {
            shoppingListId: listId,
            ingredientId: ingredient.id,
            quantity: item.quantity,
            unit: item.unit,
          },
          include: { ingredient: true },
        });
      }),
    );

    return JSON.stringify(createdItems);
  }

  if (toolName === "get_active_shopping_lists") {
    const lists = await prisma.shoppingList.findMany({
      where: { status: "active" },
      include: { items: { include: { ingredient: true } } },
    });
    return JSON.stringify(lists);
  }

  return JSON.stringify({ error: `Tool "${toolName}" não encontrada` });
};

import type { ITool } from "../types";
import prisma from "../../database";

// ============================================================================
// TOOLS - RECEITAS
// ============================================================================
// Tools que a IA usa para buscar e criar receitas

export const recipeTools: ITool[] = [
  {
    type: "function",
    function: {
      name: "search_recipes",
      description:
        "Busca receitas no banco de dados por termo. Use quando o usuário perguntar sobre receitas que já existem ou quiser reaproveitar algo.",
      parameters: {
        type: "object",
        properties: {
          query: {
            type: "string",
            description: "Termo de busca (nome da receita ou ingrediente)",
          },
        },
        required: ["query"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "get_recipe",
      description:
        "Busca uma receita específica pelo ID com todos os ingredientes e quantidades.",
      parameters: {
        type: "object",
        properties: {
          recipeId: {
            type: "string",
            description: "ID da receita",
          },
        },
        required: ["recipeId"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "create_recipe",
      description:
        "Cria uma nova receita com ingredientes. Use quando o usuário pedir uma receita nova. Após criar, verifique o estoque e monte a lista de compras.",
      parameters: {
        type: "object",
        properties: {
          title: {
            type: "string",
            description: "Nome da receita",
          },
          description: {
            type: "string",
            description: "Descrição curta da receita",
          },
          instructions: {
            type: "string",
            description: "Passo a passo do preparo",
          },
          servings: {
            type: "number",
            description: "Número de porções",
          },
          prepTime: {
            type: "number",
            description: "Tempo de preparo em minutos",
          },
          cookTime: {
            type: "number",
            description: "Tempo de cozimento em minutos",
          },
          ingredients: {
            type: "array",
            description: "Lista de ingredientes",
            items: {
              type: "object",
              properties: {
                name: { type: "string", description: "Nome do ingrediente" },
                quantity: { type: "string", description: "Quantidade (ex: '500g', '2 xícaras')" },
                unit: { type: "string", description: "Unidade de medida" },
              },
              required: ["name", "quantity"],
            },
          },
        },
        required: ["title", "instructions", "ingredients"],
      },
    },
  },
];

// Executor das tools de receita
// Recebe o nome da tool e os argumentos, executa a query no banco
export const executeRecipeTool = async (
  toolName: string,
  args: Record<string, unknown>,
): Promise<string> => {
  // TODO: implementar cada tool
  //
  // if (toolName === "search_recipes") {
  //   const query = args.query as string;
  //   const recipes = await prisma.recipe.findMany({
  //     where: {
  //       OR: [
  //         { title: { contains: query } },
  //         { description: { contains: query } },
  //       ],
  //     },
  //     include: { ingredients: { include: { ingredient: true } } },
  //     take: 5,
  //   });
  //   return JSON.stringify(recipes);
  // }
  //
  // if (toolName === "get_recipe") {
  //   const recipe = await prisma.recipe.findUnique({
  //     where: { id: args.recipeId as string },
  //     include: { ingredients: { include: { ingredient: true } } },
  //   });
  //   return JSON.stringify(recipe);
  // }
  //
  // if (toolName === "create_recipe") {
  //   // 1. Para cada ingrediente, faça upsert (crie se não existir)
  //   // 2. Crie a receita com os RecipeIngredients
  //   // 3. Retorne a receita criada
  // }

  return JSON.stringify({ error: `Tool "${toolName}" não implementada` });
};

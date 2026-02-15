// ============================================================================
// LLM TOOLS - Registro Central
// ============================================================================
// Aqui você registra todas as tools que a IA pode chamar
// Cada tool é uma função que a IA invoca para interagir com o banco de dados
//
// COMO FUNCIONA:
// 1. Você define as tools com nome, descrição e parâmetros (schema JSON)
// 2. Envia as tools na request pro Ollama junto com a mensagem
// 3. A IA decide qual tool chamar e com quais argumentos
// 4. Você executa a função correspondente e retorna o resultado pra IA
// 5. A IA usa o resultado pra formular a resposta pro usuário
//
// FORMATO (compatível com Ollama tool calling):
// {
//   type: "function",
//   function: {
//     name: "nome_da_tool",
//     description: "O que ela faz (a IA lê isso pra decidir quando usar)",
//     parameters: { type: "object", properties: {...}, required: [...] }
//   }
// }

import type { ITool } from "../types";
import { recipeTools, executeRecipeTool } from "./recipe-tools";
import { stockTools, executeStockTool } from "./stock-tools";
import { shoppingTools, executeShoppingTool } from "./shopping-tools";
import { blacklistTools, executeBlacklistTool } from "./blacklist-tools";

// Todas as tools disponíveis pra IA
export const allTools: ITool[] = [
  ...recipeTools,
  ...stockTools,
  ...shoppingTools,
  ...blacklistTools,
];

// Executor central - recebe o nome da tool e os argumentos, executa a função certa
// Chamado dentro do loop de chat quando a IA retorna um tool_call
export const executeTool = async (
  toolName: string,
  args: Record<string, unknown>,
): Promise<string> => {
  // TODO: implementar o roteamento
  // Identifique a tool pelo nome e chame o executor correto
  // Retorne o resultado como string (a IA vai ler isso)
  //
  // switch (toolName) {
  //   // Recipe tools
  //   case "search_recipes":
  //   case "get_recipe":
  //     return await executeRecipeTool(toolName, args);
  //
  //   // Stock tools
  //   case "check_stock":
  //   case "get_expiring_items":
  //     return await executeStockTool(toolName, args);
  //
  //   // Shopping tools
  //   case "create_shopping_list":
  //   case "add_shopping_items":
  //     return await executeShoppingTool(toolName, args);
  //
  //   // Blacklist tools
  //   case "get_blacklist":
  //     return await executeBlacklistTool(toolName, args);
  //
  //   default:
  //     return JSON.stringify({ error: `Tool "${toolName}" não encontrada` });
  // }

  return JSON.stringify({ error: "executeTool não implementado" });
};

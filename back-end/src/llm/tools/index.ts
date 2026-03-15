import type { ITool } from "../types";
import { recipeTools, executeRecipeTool } from "./recipe-tools";
import { stockTools, executeStockTool } from "./stock-tools";
import { shoppingTools, executeShoppingTool } from "./shopping-tools";
import { blacklistTools, executeBlacklistTool } from "./blacklist-tools";

export const allTools: ITool[] = [
  ...recipeTools,
  ...stockTools,
  ...shoppingTools,
  ...blacklistTools,
];

export const executeTool = async (
  toolName: string,
  args: Record<string, unknown>,
): Promise<string> => {
  switch (toolName) {
    case "search_recipes":
    case "get_recipe":
    case "create_recipe":
      return executeRecipeTool(toolName, args);

    case "check_stock":
    case "get_expiring_items":
      return executeStockTool(toolName, args);

    case "create_shopping_list":
    case "add_shopping_items":
    case "get_active_shopping_lists":
      return executeShoppingTool(toolName, args);

    case "get_blacklist":
      return executeBlacklistTool(toolName, args);

    default:
      return JSON.stringify({ error: `Tool "${toolName}" não encontrada` });
  }
};

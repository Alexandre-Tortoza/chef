import { logger } from "../utils/logger";
import { getMemory, saveMemory } from "../llm/llmMemory";
import { allTools, executeTool } from "./tools";
import type { ILLMMessage, LLMConfigure } from "./types";

const SYSTEM_PROMPT = `Você é o Chef AI, um assistente culinário inteligente.

Suas capacidades:
- Criar receitas completas com ingredientes e instruções
- Verificar o estoque do usuário antes de montar listas de compras
- Criar listas de compras com os ingredientes que faltam
- Consultar a blacklist para evitar ingredientes proibidos

Quando o usuário pedir algo como "quero comer lasanha":
1. Primeiro consulte a blacklist para saber restrições
2. Crie a receita com create_recipe (ingredientes, instruções, tempo, porções)
3. Verifique o estoque com check_stock para ver o que o usuário já tem
4. Crie uma lista de compras com create_shopping_list apenas com o que falta

IMPORTANTE: Sempre use as tools disponíveis para criar receitas e listas no sistema. Não apenas descreva - execute as ações.

Responda sempre em texto puro, sem formatação markdown (sem *, **, #, \`\`\`, listas com - ou *). Use quebras de linha simples para organizar o texto.
Responda sempre em português brasileiro.`;

const getLLMConfig = (): LLMConfigure => {
  return {
    url: process.env.LLM_URL || "http://127.0.0.1:11434/api/chat",
    model: process.env.LLM_MODEL || "gemma3:4b",
  };
};

const USER_REQUEST = "1";

const loadMemories = async (userRequest: string) => {
  try {
    const memories = await getMemory(userRequest);
    return memories;
  } catch (error) {
    console.error(`Falha para carregar a memoria: ${error}`);
    return [];
  }
};

const MAX_TOOL_ROUNDS = 10;

export const runLLM = async (userPrompt: string): Promise<string> => {
  const memories = await loadMemories(USER_REQUEST);
  const config = getLLMConfig();

  const memoryContext = memories.map((m) => m.data).join("\n");

  const messages: ILLMMessage[] = [
    { role: "system", content: SYSTEM_PROMPT },
  ];

  if (memoryContext) {
    messages.push({
      role: "system",
      content: `Contexto anterior:\n${memoryContext}`,
    });
  }

  messages.push({ role: "user", content: userPrompt });

  let finalResponse = "";

  for (let round = 0; round < MAX_TOOL_ROUNDS; round++) {
    const response = await fetch(config.url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: config.model,
        messages,
        tools: allTools,
        stream: false,
      }),
    });

    if (!response.ok) {
      throw new Error(
        `Falha na request da LLM: ${response.status} ${response.statusText}`,
      );
    }

    const jsonResponse = await response.json();
    logger(jsonResponse, "llm.md");

    const assistantMessage = jsonResponse.message;

    messages.push({
      role: "assistant",
      content: assistantMessage.content || "",
      tool_calls: assistantMessage.tool_calls,
    });

    if (!assistantMessage.tool_calls || assistantMessage.tool_calls.length === 0) {
      finalResponse = assistantMessage.content || "";
      break;
    }

    for (const toolCall of assistantMessage.tool_calls) {
      const toolName = toolCall.function.name;
      const toolArgs = toolCall.function.arguments || {};

      console.log(`[LLM] Executando tool: ${toolName}`, toolArgs);

      const toolResult = await executeTool(toolName, toolArgs);

      console.log(`[LLM] Resultado tool ${toolName}:`, toolResult.slice(0, 200));

      messages.push({
        role: "tool",
        content: toolResult,
      });
    }
  }

  await saveMemory(USER_REQUEST, finalResponse);

  return finalResponse;
};

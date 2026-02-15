import { logger } from "../utils/logger";
import { getMemory, saveMemory } from "../llm/llmMemory";

type LLMRole = "system" | "user" | "assistant" | "tool";

interface IToolCall {
  name: string;
  description?: string;
  arguments: Record<string, unknown>;
}

interface ILLMMessage {
  role: LLMRole;
  content: string;
  tool_calls?: IToolCall[];
}

interface IToolFunction {
  name: string;
  description?: string;
  parameters: Record<string, unknown>;
}

interface ITool {
  type: "function";
  function: IToolFunction;
}

interface ILLChat {
  model: string;
  messages: ILLMMessage[];
  tools?: ITool[];
}

interface LLMConfigure {
  model: string;
  url: string;
}

const getLLMConfig = (): LLMConfigure => {
  return {
    url: process.env.LLM_URL || "http://127.0.0.1:11434/api/generate",
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

export const runLLM = async (userPrompt: string): Promise<string> => {
  const memories = await loadMemories(USER_REQUEST);
  const config = getLLMConfig();

  // Concatenar memórias e prompt em uma única string
  const memoryContext = memories.map(m => m.data).join("\n");
  const fullPrompt = memoryContext ? `${memoryContext}\n\n${userPrompt}` : userPrompt;

  const response = await fetch(config.url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: config.model,
      prompt: fullPrompt,
      stream: false,
    }),
  });

  if (!response.ok) {
    throw new Error(
      `Falha na request da LLM: ${response.status} ${response.statusText}`,
    );
  }

  const jsonResponse = await response.json();
  const llmResponse = jsonResponse.response;

  await saveMemory(USER_REQUEST, llmResponse);

  logger(jsonResponse, "llm.md");

  return llmResponse;
};

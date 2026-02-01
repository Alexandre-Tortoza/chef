import { logger } from "../utils/logger";
import { saveMemory, getMemories } from "./memorie";

const DEFAULT_CONVERSATION_ID = "1";

interface LLMConfig {
  url: string;
  model: string;
}

interface LLMResponse {
  response: string;
  [key: string]: unknown;
}

const getLLMConfig = (): LLMConfig => ({
  url: process.env.LLM_URL || "http://127.0.0.1:11434/api/generate",
  model: process.env.LLM_MODEL || "gemma3:4b",
});

const loadMemories = async (conversationId: string) => {
  try {
    const memories = await getMemories(conversationId);
    return memories;
  } catch (error) {
    console.error(`Failed to load memories: ${error}`);
    return [];
  }
};

export const runLLM = async (
  userPrompt: string,
  conversationId: string = DEFAULT_CONVERSATION_ID,
): Promise<string> => {
  const memories = await loadMemories(conversationId);
  const config = getLLMConfig();

  const response = await fetch(config.url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: config.model,
      prompt: userPrompt,
      stream: false,
    }),
  });

  if (!response.ok) {
    throw new Error(
      `LLM request failed: ${response.status} ${response.statusText}`,
    );
  }

  const jsonResponse = (await response.json()) as LLMResponse;
  const llmResponse = jsonResponse.response;

  await saveMemory(conversationId, llmResponse);

  logger(jsonResponse, "llm.md");

  return llmResponse;
};

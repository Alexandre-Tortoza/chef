// ============================================================================
// TIPOS DO LLM
// ============================================================================
// Tipos compartilhados entre llm.ts e as tools

export type LLMRole = "system" | "user" | "assistant" | "tool";

export interface IToolCall {
  name: string;
  description?: string;
  arguments: Record<string, unknown>;
}

export interface ILLMMessage {
  role: LLMRole;
  content: string;
  tool_calls?: IToolCall[];
}

export interface IToolFunction {
  name: string;
  description?: string;
  parameters: Record<string, unknown>;
}

export interface ITool {
  type: "function";
  function: IToolFunction;
}

export interface ILLChat {
  model: string;
  messages: ILLMMessage[];
  tools?: ITool[];
}

export interface LLMConfigure {
  model: string;
  url: string;
}

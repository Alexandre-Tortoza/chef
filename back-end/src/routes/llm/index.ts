import { Elysia } from "elysia";
import { chat, getHistory, clearHistory } from "./handlers";

// ============================================================================
// ROTAS - LLM (prefixo: /llm)
// ============================================================================
// Interface de chat entre o frontend e a IA
// A IA usa tool calling para interagir com o banco (receitas, estoque, etc.)

const llmRoutes = new Elysia()
  .post("/chat", chat)
  .get("/history", getHistory)
  .delete("/history", clearHistory);

export default llmRoutes;

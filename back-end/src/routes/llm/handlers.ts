import { runLLM } from "../../llm/llm";
import prisma from "../../database";

// ============================================================================
// HANDLERS - LLM (Chat com a IA)
// ============================================================================
// Rotas para o frontend se comunicar com a IA
// O chat usa tool calling - a IA decide quando precisa buscar dados do banco

// POST /llm/chat
// Enviar mensagem para a IA
// - Body: { message: string }
// - Chama runLLM que gerencia memória, tools e resposta
// - Retorna a resposta da IA como string
export const chat = async ({ body }: { body: { message: string } }) => {
  // TODO: implementar
  // const response = await runLLM(body.message);
  // return { response };
};

// GET /llm/history
// Buscar histórico de conversas com a IA
// - Retorne os UserRequests ordenados por data
// - Use paginação (query.skip, query.take)
export const getHistory = async ({ query }: { query: { skip?: string; take?: string } }) => {
  // TODO: implementar
  // const skip = parseInt(query.skip || "0");
  // const take = parseInt(query.take || "20");
  // await prisma.userRequest.findMany({
  //   orderBy: { createdAt: "desc" },
  //   skip,
  //   take,
  // });
};

// DELETE /llm/history
// Limpar histórico de conversas (reset da memória da IA)
export const clearHistory = async () => {
  // TODO: implementar
  // await prisma.userRequest.deleteMany();
};

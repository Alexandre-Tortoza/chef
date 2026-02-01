import { Elysia } from "elysia";

const llmRoutes = new Elysia()
  .post("/chat", () => {
    return "resposta da IA";
  })
  .get("/history", () => {
    return "historios da IA";
  });

export default llmRoutes;

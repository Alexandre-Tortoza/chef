import { Elysia, t } from "elysia";
import { postChat, getAllHistory, deleteHistory } from "./handlers";

const llmRoutes = new Elysia()
  .post("/chat", postChat, {
    body: t.Object({
      message: t.String(),
    }),
  })
  .get("/history", getAllHistory)
  .delete("/history", deleteHistory);

export default llmRoutes;

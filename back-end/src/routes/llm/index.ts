import { Elysia } from "elysia";

const llmRoutes = new Elysia({ prefix: "/lists" }).get("/", () => {
  return 0;
});

export default llmRoutes;

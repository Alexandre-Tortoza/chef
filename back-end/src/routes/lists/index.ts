import { Elysia } from "elysia";

const listsRoutes = new Elysia({ prefix: "/lists" }).get("/", () => {
  return 0;
});

export default listsRoutes;

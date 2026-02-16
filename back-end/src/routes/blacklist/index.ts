import { Elysia, t } from "elysia";
import {
  getBlacklist,
  postBlacklist,
  removeBlacklist,
} from "./handlers";

const blacklistRoutes = new Elysia({ prefix: "/blacklist" })
  .get("/", getBlacklist)
  .post("/", postBlacklist, {
    body: t.Object({
      ingredientId: t.String(),
      reason: t.Optional(t.String()),
    }),
  })
  .delete("/:id", removeBlacklist);

export default blacklistRoutes;

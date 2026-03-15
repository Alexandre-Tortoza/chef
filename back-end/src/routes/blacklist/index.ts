import { Elysia, t } from "elysia";
import {
  getAllBlacklist,
  postBlacklist,
  deleteBlacklist,
} from "./handlers";

const blacklistRoutes = new Elysia({ prefix: "/blacklist" })
  .get("/", getAllBlacklist)
  .post("/", postBlacklist, {
    body: t.Object({
      ingredientId: t.String(),
      reason: t.Optional(t.String()),
    }),
  })
  .delete("/:id", deleteBlacklist);

export default blacklistRoutes;

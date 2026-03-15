import { Elysia } from "elysia";
import cors from "@elysiajs/cors";

import recipesRoutes from "./routes/recipes";
import ingredientsRoutes from "./routes/ingredients";
import stockRoutes from "./routes/stock";
import shoppingRoutes from "./routes/shopping";
import blacklistRoutes from "./routes/blacklist";
import plansRoutes from "./routes/plans";
import suggestionsRoutes from "./routes/suggestions";
import llmRoutes from "./routes/llm";

const app = new Elysia()
  .use(cors())
  .onError(({ error, set }) => {
    if (error.message.includes("não encontrad")) {
      set.status = 404;
      return { error: error.message };
    }

    if (error.message.includes("já existe") || error.message.includes("já está")) {
      set.status = 409;
      return { error: error.message };
    }

    set.status = 500;
    return { error: error.message };
  });

app.group("/api", (app) =>
  app
    .use(recipesRoutes)
    .use(ingredientsRoutes)
    .use(stockRoutes)
    .use(shoppingRoutes)
    .use(blacklistRoutes)
    .use(plansRoutes)
    .use(suggestionsRoutes)
);

app.group("/llm", (app) => app.use(llmRoutes));

app.listen(3000);

console.log(`
┌──────────────────────────────────────┐
│            Chef Back-end             │
├──────────────────────────────────────┤
│ Status     : Online                  │
│ Runtime    : bun                     │
│ FrameWork  : Elysia                  │
│ Port       : 3000                    │
│ URL        : http://127.0.0.1:3000   │
│ Author     : alexmrtr                │
└──────────────────────────────────────┘
`);

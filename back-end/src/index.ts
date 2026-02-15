import { Elysia } from "elysia";

// Rotas da API (CRUD dos recursos)
import recipesRoutes from "./routes/recipes";
import ingredientsRoutes from "./routes/ingredients";
import stockRoutes from "./routes/stock";
import shoppingRoutes from "./routes/shopping";
import blacklistRoutes from "./routes/blacklist";
import plansRoutes from "./routes/plans";
import suggestionsRoutes from "./routes/suggestions";

// Rotas do LLM (chat com a IA)
import llmRoutes from "./routes/llm";

const app = new Elysia();

// ============================================================================
// API ROUTES - /api/*
// ============================================================================
// Todas as rotas de CRUD ficam sob /api
// Ex: GET /api/recipes, POST /api/shopping, etc.
app.group("/api", (app) =>
  app
    .use(recipesRoutes)       // /api/recipes
    .use(ingredientsRoutes)   // /api/ingredients
    .use(stockRoutes)         // /api/stock
    .use(shoppingRoutes)      // /api/shopping
    .use(blacklistRoutes)     // /api/blacklist
    .use(plansRoutes)         // /api/plans
    .use(suggestionsRoutes)   // /api/suggestions
);

// ============================================================================
// LLM ROUTES - /llm/*
// ============================================================================
// Chat com a IA e histórico
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

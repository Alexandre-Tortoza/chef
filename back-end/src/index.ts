import { Elysia } from "elysia";
import listsRoutes from "./routes/lists";
import llmRoutes from "./routes/llm";

const app = new Elysia();

app.group("/api", (app) => app.use(listsRoutes));
app.group("/llm", (app) => app.use(llmRoutes));
app.listen(3000);

console.log(`
┌──────────────────────────────────────┐
│            SERVIDOR ATIVO            │
├──────────────────────────────────────┤
│ Status     : Online                  │
│ Runtime    : bun                     │
│ FrameWork  : Elysia                  │
│ Porta      : 3000                    │
│ URL        : http://127.0.0.1:3000   │
└──────────────────────────────────────┘

feito por: alexmrtr
`);

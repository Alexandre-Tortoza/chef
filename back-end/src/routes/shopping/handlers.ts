import prisma from "../../database";

// ============================================================================
// HANDLERS - SHOPPING (Lista de Compras)
// ============================================================================
// A IA monta a lista de compras automaticamente a partir das receitas
// Fluxo: Receita → verifica estoque → o que falta vai pra lista
// Quando o usuário marca como comprado → cria StockItem

// --- SHOPPING LIST (a lista em si) ---

// GET /api/shopping
// Listar todas as listas de compras
// - Filtre por status: "active" | "completed" | "archived"
// - Inclua contagem de itens e itens comprados
export const listShoppingLists = async ({ query }: { query: { status?: string } }) => {
  // TODO: implementar
  // await prisma.shoppingList.findMany({
  //   where: query.status ? { status: query.status } : {},
  //   include: { _count: { select: { items: true } } },
  //   orderBy: { createdAt: "desc" },
  // });
};

// GET /api/shopping/:id
// Buscar lista de compras por ID com todos os itens
// - Inclua ingrediente de cada item
// - Ordene itens: não comprados primeiro, depois por prioridade
export const getShoppingList = async ({ params }: { params: { id: string } }) => {
  // TODO: implementar
  // await prisma.shoppingList.findUnique({
  //   where: { id: params.id },
  //   include: {
  //     items: {
  //       include: { ingredient: true },
  //       orderBy: [{ purchased: "asc" }, { priority: "desc" }],
  //     },
  //   },
  // });
};

// POST /api/shopping
// Criar nova lista de compras
// - Body: { name }
// - Status começa como "active"
export const createShoppingList = async ({ body }: { body: any }) => {
  // TODO: implementar
};

// PUT /api/shopping/:id
// Atualizar lista (nome, status)
// - Quando todos os itens forem comprados, mude status para "completed"
export const updateShoppingList = async ({ params, body }: { params: { id: string }; body: any }) => {
  // TODO: implementar
};

// DELETE /api/shopping/:id
// Deletar lista de compras (cascade deleta os items)
export const deleteShoppingList = async ({ params }: { params: { id: string } }) => {
  // TODO: implementar
};

// --- SHOPPING ITEMS (itens dentro da lista) ---

// POST /api/shopping/:listId/items
// Adicionar item à lista
// - Body: { ingredientId, quantity, unit?, notes?, priority?, recipeId? }
// - recipeId é opcional, serve pra rastrear de qual receita veio o item
export const addShoppingItem = async ({ params, body }: { params: { listId: string }; body: any }) => {
  // TODO: implementar
  // await prisma.shoppingItem.create({
  //   data: {
  //     ...body,
  //     shoppingListId: params.listId,
  //   },
  // });
};

// PUT /api/shopping/:listId/items/:itemId
// Atualizar item (quantidade, prioridade, etc.)
export const updateShoppingItem = async ({
  params,
  body,
}: {
  params: { listId: string; itemId: string };
  body: any;
}) => {
  // TODO: implementar
};

// PATCH /api/shopping/:listId/items/:itemId/purchase
// Marcar item como comprado
// - Sete purchased = true
// - IMPORTANTE: Crie um StockItem automaticamente com os dados do item
// - Esse é o fluxo principal: comprou → entra no estoque
export const purchaseShoppingItem = async ({
  params,
}: {
  params: { listId: string; itemId: string };
}) => {
  // TODO: implementar
  // 1. Busque o ShoppingItem
  // 2. Atualize purchased = true
  // 3. Crie StockItem com ingredientId, quantity, unit
  // Use prisma.$transaction para garantir atomicidade
};

// DELETE /api/shopping/:listId/items/:itemId
// Remover item da lista
export const deleteShoppingItem = async ({
  params,
}: {
  params: { listId: string; itemId: string };
}) => {
  // TODO: implementar
};

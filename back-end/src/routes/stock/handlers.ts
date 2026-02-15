import prisma from "../../database";

// ============================================================================
// HANDLERS - STOCK (Estoque)
// ============================================================================
// Estoque é o que o usuário TEM em casa
// A IA consulta o estoque para decidir o que colocar na lista de compras
// Quando o usuário compra algo (ShoppingItem.purchased = true), cria um StockItem

// GET /api/stock
// Listar todos os itens no estoque
// - Inclua o ingrediente relacionado (nome, categoria)
// - Filtre por location se query.location vier (geladeira, despensa, etc.)
export const listStock = async ({ query }: { query: { location?: string } }) => {
  // TODO: implementar
  // await prisma.stockItem.findMany({
  //   include: { ingredient: true },
  //   orderBy: { expiryDate: "asc" }, // itens mais perto de vencer primeiro
  // });
};

// GET /api/stock/:id
// Buscar item do estoque por ID
export const getStockItem = async ({ params }: { params: { id: string } }) => {
  // TODO: implementar
};

// POST /api/stock
// Adicionar item ao estoque
// - Body: { ingredientId, quantity, unit?, expiryDate?, location? }
// - Chamado quando o usuário marca um item como comprado
// - Também pode ser adicionado manualmente
export const createStockItem = async ({ body }: { body: any }) => {
  // TODO: implementar
};

// PUT /api/stock/:id
// Atualizar item do estoque (quantidade, validade, localização)
// - Útil quando o usuário consome parte do estoque
export const updateStockItem = async ({ params, body }: { params: { id: string }; body: any }) => {
  // TODO: implementar
};

// DELETE /api/stock/:id
// Remover item do estoque (acabou, estragou, etc.)
export const deleteStockItem = async ({ params }: { params: { id: string } }) => {
  // TODO: implementar
};

// GET /api/stock/expiring
// Listar itens próximos de vencer (próximos 7 dias)
// - A IA pode usar isso pra sugerir receitas que aproveitem esses ingredientes
export const getExpiringItems = async () => {
  // TODO: implementar
  // const sevenDaysFromNow = new Date();
  // sevenDaysFromNow.setDate(sevenDaysFromNow.getDate() + 7);
  // await prisma.stockItem.findMany({
  //   where: { expiryDate: { lte: sevenDaysFromNow, not: null } },
  //   include: { ingredient: true },
  // });
};

export type StockParams = {
  params: { id: string };
};

export type StockQuery = {
  query: { location?: string };
};

export type StockBody = {
  body: {
    ingredientId: string;
    quantity: string;
    unit?: string;
    expiryDate?: string;
    location?: string;
  };
};

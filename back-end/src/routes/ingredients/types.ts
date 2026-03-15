export type IngredientParams = {
  params: { id: string };
};

export type IngredientQuery = {
  query: { category?: string };
};

export type IngredientBody = {
  body: {
    name: string;
    category?: string;
    defaultUnit?: string;
  };
};

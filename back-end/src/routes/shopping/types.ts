export type ShoppingListParams = {
  params: { id: string };
};

export type ShoppingListQuery = {
  query: { status?: string };
};

export type ShoppingListBody = {
  body: {
    name: string;
    status?: string;
    recurrence?: string;
  };
};

export type ShoppingItemParams = {
  params: { id: string; itemId: string };
};

export type ShoppingItemBody = {
  body: {
    ingredientId: string;
    quantity: string;
    unit?: string;
    notes?: string;
    priority?: number;
    recipeId?: string;
  };
};

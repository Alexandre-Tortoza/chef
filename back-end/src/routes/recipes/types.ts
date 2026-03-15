export type RecipeParams = {
  params: { id: string };
};

export type RecipeSearchQuery = {
  query: { q: string };
};

export type RecipeIngredientInput = {
  ingredientId: string;
  quantity: string;
  unit?: string;
  notes?: string;
};

export type RecipeBody = {
  body: {
    title: string;
    description?: string;
    instructions: string;
    servings?: number;
    prepTime?: number;
    cookTime?: number;
    ingredients: RecipeIngredientInput[];
  };
};

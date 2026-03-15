export type SuggestionParams = {
  params: { id: string };
};

export type SuggestionQuery = {
  query: { type?: string };
};

export type SuggestionBody = {
  body: {
    title: string;
    description: string;
    type: string;
    recipeIds?: string;
    ingredients?: string;
  };
};

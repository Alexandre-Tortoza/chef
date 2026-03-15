export type BlacklistParams = {
  params: { id: string };
};

export type BlacklistBody = {
  body: {
    ingredientId: string;
    reason?: string;
  };
};

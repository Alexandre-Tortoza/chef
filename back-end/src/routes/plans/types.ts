export type PlanParams = {
  params: { id: string };
};

export type PlanQuery = {
  query: { active?: string };
};

export type PlanBody = {
  body: {
    name: string;
    description?: string;
    frequency: string;
    startDate: string;
    endDate?: string;
    active?: boolean;
  };
};

export type PlanItemParams = {
  params: { id: string; itemId: string };
};

export type PlanItemBody = {
  body: {
    recipeId: string;
    dayOfWeek?: number;
    dayOfMonth?: number;
    mealType?: string;
  };
};

import prisma from "../../database";
import type { SuggestionParams, SuggestionQuery, SuggestionBody } from "./types";

// GET /api/suggestions
export const getAllSuggestion = async ({ query }: SuggestionQuery) => {
  const where = {
    dismissed: false,
    ...(query.type ? { type: query.type } : {}),
  };

  const suggestions = await prisma.suggestion.findMany({
    where,
    orderBy: { createdAt: "desc" },
  });

  return suggestions;
};

// POST /api/suggestions
export const postSuggestion = async ({ body }: SuggestionBody) => {
  const suggestion = await prisma.suggestion.create({
    data: {
      title: body.title,
      description: body.description,
      type: body.type,
      recipeIds: body.recipeIds,
      ingredients: body.ingredients,
    },
  });

  return suggestion;
};

// PATCH /api/suggestions/:id/dismiss
export const patchSuggestion = async ({ params }: SuggestionParams) => {
  const existing = await prisma.suggestion.findUnique({
    where: { id: params.id },
  });

  if (!existing) {
    throw new Error("Sugestão não encontrada");
  }

  const suggestion = await prisma.suggestion.update({
    where: { id: params.id },
    data: { dismissed: true },
  });

  return suggestion;
};

// DELETE /api/suggestions/:id
export const deleteSuggestion = async ({ params }: SuggestionParams) => {
  const existing = await prisma.suggestion.findUnique({
    where: { id: params.id },
  });

  if (!existing) {
    throw new Error("Sugestão não encontrada");
  }

  await prisma.suggestion.delete({
    where: { id: params.id },
  });

  return { message: "Sugestão removida" };
};

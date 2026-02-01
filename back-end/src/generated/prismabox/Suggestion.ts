import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const SuggestionPlain = t.Object(
  {
    id: t.String(),
    title: t.String(),
    description: t.String(),
    type: t.String(),
    recipeIds: __nullable__(t.String()),
    ingredients: __nullable__(t.String()),
    dismissed: t.Boolean(),
    createdAt: t.Date(),
  },
  { additionalProperties: false },
);

export const SuggestionRelations = t.Object(
  {},
  { additionalProperties: false },
);

export const SuggestionPlainInputCreate = t.Object(
  {
    title: t.String(),
    description: t.String(),
    type: t.String(),
    recipeIds: t.Optional(__nullable__(t.String())),
    ingredients: t.Optional(__nullable__(t.String())),
    dismissed: t.Optional(t.Boolean()),
  },
  { additionalProperties: false },
);

export const SuggestionPlainInputUpdate = t.Object(
  {
    title: t.Optional(t.String()),
    description: t.Optional(t.String()),
    type: t.Optional(t.String()),
    recipeIds: t.Optional(__nullable__(t.String())),
    ingredients: t.Optional(__nullable__(t.String())),
    dismissed: t.Optional(t.Boolean()),
  },
  { additionalProperties: false },
);

export const SuggestionRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const SuggestionRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const SuggestionWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          title: t.String(),
          description: t.String(),
          type: t.String(),
          recipeIds: t.String(),
          ingredients: t.String(),
          dismissed: t.Boolean(),
          createdAt: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "Suggestion" },
  ),
);

export const SuggestionWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object({ id: t.String() }, { additionalProperties: false }),
          { additionalProperties: false },
        ),
        t.Union([t.Object({ id: t.String() })], {
          additionalProperties: false,
        }),
        t.Partial(
          t.Object({
            AND: t.Union([
              Self,
              t.Array(Self, { additionalProperties: false }),
            ]),
            NOT: t.Union([
              Self,
              t.Array(Self, { additionalProperties: false }),
            ]),
            OR: t.Array(Self, { additionalProperties: false }),
          }),
          { additionalProperties: false },
        ),
        t.Partial(
          t.Object(
            {
              id: t.String(),
              title: t.String(),
              description: t.String(),
              type: t.String(),
              recipeIds: t.String(),
              ingredients: t.String(),
              dismissed: t.Boolean(),
              createdAt: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "Suggestion" },
);

export const SuggestionSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      title: t.Boolean(),
      description: t.Boolean(),
      type: t.Boolean(),
      recipeIds: t.Boolean(),
      ingredients: t.Boolean(),
      dismissed: t.Boolean(),
      createdAt: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const SuggestionInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const SuggestionOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      title: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      description: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      type: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      recipeIds: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      ingredients: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      dismissed: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      createdAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const Suggestion = t.Composite([SuggestionPlain, SuggestionRelations], {
  additionalProperties: false,
});

export const SuggestionInputCreate = t.Composite(
  [SuggestionPlainInputCreate, SuggestionRelationsInputCreate],
  { additionalProperties: false },
);

export const SuggestionInputUpdate = t.Composite(
  [SuggestionPlainInputUpdate, SuggestionRelationsInputUpdate],
  { additionalProperties: false },
);

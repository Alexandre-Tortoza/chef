import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const RecipeIngredientPlain = t.Object(
  {
    id: t.String(),
    quantity: t.String(),
    unit: __nullable__(t.String()),
    notes: __nullable__(t.String()),
    recipeId: t.String(),
    ingredientId: t.String(),
  },
  { additionalProperties: false },
);

export const RecipeIngredientRelations = t.Object(
  {
    recipe: t.Object(
      {
        id: t.String(),
        title: t.String(),
        description: __nullable__(t.String()),
        instructions: t.String(),
        servings: t.Integer(),
        prepTime: __nullable__(t.Integer()),
        cookTime: __nullable__(t.Integer()),
        createdAt: t.Date(),
        updatedAt: t.Date(),
        userRequestId: __nullable__(t.String()),
      },
      { additionalProperties: false },
    ),
    ingredient: t.Object(
      {
        id: t.String(),
        name: t.String(),
        category: __nullable__(t.String()),
        defaultUnit: __nullable__(t.String()),
        createdAt: t.Date(),
        updatedAt: t.Date(),
      },
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const RecipeIngredientPlainInputCreate = t.Object(
  {
    quantity: t.String(),
    unit: t.Optional(__nullable__(t.String())),
    notes: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const RecipeIngredientPlainInputUpdate = t.Object(
  {
    quantity: t.Optional(t.String()),
    unit: t.Optional(__nullable__(t.String())),
    notes: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const RecipeIngredientRelationsInputCreate = t.Object(
  {
    recipe: t.Object(
      {
        connect: t.Object(
          {
            id: t.String({ additionalProperties: false }),
          },
          { additionalProperties: false },
        ),
      },
      { additionalProperties: false },
    ),
    ingredient: t.Object(
      {
        connect: t.Object(
          {
            id: t.String({ additionalProperties: false }),
          },
          { additionalProperties: false },
        ),
      },
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const RecipeIngredientRelationsInputUpdate = t.Partial(
  t.Object(
    {
      recipe: t.Object(
        {
          connect: t.Object(
            {
              id: t.String({ additionalProperties: false }),
            },
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
      ingredient: t.Object(
        {
          connect: t.Object(
            {
              id: t.String({ additionalProperties: false }),
            },
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    },
    { additionalProperties: false },
  ),
);

export const RecipeIngredientWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          quantity: t.String(),
          unit: t.String(),
          notes: t.String(),
          recipeId: t.String(),
          ingredientId: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "RecipeIngredient" },
  ),
);

export const RecipeIngredientWhereUnique = t.Recursive(
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
              quantity: t.String(),
              unit: t.String(),
              notes: t.String(),
              recipeId: t.String(),
              ingredientId: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "RecipeIngredient" },
);

export const RecipeIngredientSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      quantity: t.Boolean(),
      unit: t.Boolean(),
      notes: t.Boolean(),
      recipeId: t.Boolean(),
      recipe: t.Boolean(),
      ingredientId: t.Boolean(),
      ingredient: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const RecipeIngredientInclude = t.Partial(
  t.Object(
    { recipe: t.Boolean(), ingredient: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const RecipeIngredientOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      quantity: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      unit: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      notes: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      recipeId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      ingredientId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const RecipeIngredient = t.Composite(
  [RecipeIngredientPlain, RecipeIngredientRelations],
  { additionalProperties: false },
);

export const RecipeIngredientInputCreate = t.Composite(
  [RecipeIngredientPlainInputCreate, RecipeIngredientRelationsInputCreate],
  { additionalProperties: false },
);

export const RecipeIngredientInputUpdate = t.Composite(
  [RecipeIngredientPlainInputUpdate, RecipeIngredientRelationsInputUpdate],
  { additionalProperties: false },
);

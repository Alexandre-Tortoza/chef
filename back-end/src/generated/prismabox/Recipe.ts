import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const RecipePlain = t.Object(
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
);

export const RecipeRelations = t.Object(
  {
    ingredients: t.Array(
      t.Object(
        {
          id: t.String(),
          quantity: t.String(),
          unit: __nullable__(t.String()),
          notes: __nullable__(t.String()),
          recipeId: t.String(),
          ingredientId: t.String(),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    userRequest: __nullable__(
      t.Object(
        {
          id: t.String(),
          requestText: t.String(),
          llmResponse: t.String(),
          actionType: t.String(),
          createdAt: t.Date(),
          metadata: __nullable__(t.String()),
        },
        { additionalProperties: false },
      ),
    ),
  },
  { additionalProperties: false },
);

export const RecipePlainInputCreate = t.Object(
  {
    title: t.String(),
    description: t.Optional(__nullable__(t.String())),
    instructions: t.String(),
    servings: t.Optional(t.Integer()),
    prepTime: t.Optional(__nullable__(t.Integer())),
    cookTime: t.Optional(__nullable__(t.Integer())),
  },
  { additionalProperties: false },
);

export const RecipePlainInputUpdate = t.Object(
  {
    title: t.Optional(t.String()),
    description: t.Optional(__nullable__(t.String())),
    instructions: t.Optional(t.String()),
    servings: t.Optional(t.Integer()),
    prepTime: t.Optional(__nullable__(t.Integer())),
    cookTime: t.Optional(__nullable__(t.Integer())),
  },
  { additionalProperties: false },
);

export const RecipeRelationsInputCreate = t.Object(
  {
    ingredients: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    userRequest: t.Optional(
      t.Object(
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
    ),
  },
  { additionalProperties: false },
);

export const RecipeRelationsInputUpdate = t.Partial(
  t.Object(
    {
      ingredients: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
      userRequest: t.Partial(
        t.Object(
          {
            connect: t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            disconnect: t.Boolean(),
          },
          { additionalProperties: false },
        ),
      ),
    },
    { additionalProperties: false },
  ),
);

export const RecipeWhere = t.Partial(
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
          instructions: t.String(),
          servings: t.Integer(),
          prepTime: t.Integer(),
          cookTime: t.Integer(),
          createdAt: t.Date(),
          updatedAt: t.Date(),
          userRequestId: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "Recipe" },
  ),
);

export const RecipeWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.String(), userRequestId: t.String() },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [
            t.Object({ id: t.String() }),
            t.Object({ userRequestId: t.String() }),
          ],
          { additionalProperties: false },
        ),
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
              instructions: t.String(),
              servings: t.Integer(),
              prepTime: t.Integer(),
              cookTime: t.Integer(),
              createdAt: t.Date(),
              updatedAt: t.Date(),
              userRequestId: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "Recipe" },
);

export const RecipeSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      title: t.Boolean(),
      description: t.Boolean(),
      instructions: t.Boolean(),
      servings: t.Boolean(),
      prepTime: t.Boolean(),
      cookTime: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      ingredients: t.Boolean(),
      userRequestId: t.Boolean(),
      userRequest: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const RecipeInclude = t.Partial(
  t.Object(
    { ingredients: t.Boolean(), userRequest: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const RecipeOrderBy = t.Partial(
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
      instructions: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      servings: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      prepTime: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      cookTime: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      createdAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updatedAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      userRequestId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const Recipe = t.Composite([RecipePlain, RecipeRelations], {
  additionalProperties: false,
});

export const RecipeInputCreate = t.Composite(
  [RecipePlainInputCreate, RecipeRelationsInputCreate],
  { additionalProperties: false },
);

export const RecipeInputUpdate = t.Composite(
  [RecipePlainInputUpdate, RecipeRelationsInputUpdate],
  { additionalProperties: false },
);

import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const IngredientPlain = t.Object(
  {
    id: t.String(),
    name: t.String(),
    category: __nullable__(t.String()),
    defaultUnit: __nullable__(t.String()),
    createdAt: t.Date(),
    updatedAt: t.Date(),
  },
  { additionalProperties: false },
);

export const IngredientRelations = t.Object(
  {
    recipeIngredients: t.Array(
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
    stockItems: t.Array(
      t.Object(
        {
          id: t.String(),
          quantity: t.String(),
          unit: __nullable__(t.String()),
          expiryDate: __nullable__(t.Date()),
          location: __nullable__(t.String()),
          createdAt: t.Date(),
          updatedAt: t.Date(),
          ingredientId: t.String(),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    shoppingItems: t.Array(
      t.Object(
        {
          id: t.String(),
          quantity: t.String(),
          unit: __nullable__(t.String()),
          purchased: t.Boolean(),
          notes: __nullable__(t.String()),
          priority: t.Integer(),
          createdAt: t.Date(),
          updatedAt: t.Date(),
          shoppingListId: t.String(),
          ingredientId: t.String(),
          recipeId: __nullable__(t.String()),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    blacklistItems: t.Array(
      t.Object(
        {
          id: t.String(),
          reason: __nullable__(t.String()),
          createdAt: t.Date(),
          ingredientId: t.String(),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const IngredientPlainInputCreate = t.Object(
  {
    name: t.String(),
    category: t.Optional(__nullable__(t.String())),
    defaultUnit: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const IngredientPlainInputUpdate = t.Object(
  {
    name: t.Optional(t.String()),
    category: t.Optional(__nullable__(t.String())),
    defaultUnit: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const IngredientRelationsInputCreate = t.Object(
  {
    recipeIngredients: t.Optional(
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
    stockItems: t.Optional(
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
    shoppingItems: t.Optional(
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
    blacklistItems: t.Optional(
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
  },
  { additionalProperties: false },
);

export const IngredientRelationsInputUpdate = t.Partial(
  t.Object(
    {
      recipeIngredients: t.Partial(
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
      stockItems: t.Partial(
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
      shoppingItems: t.Partial(
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
      blacklistItems: t.Partial(
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
    },
    { additionalProperties: false },
  ),
);

export const IngredientWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          name: t.String(),
          category: t.String(),
          defaultUnit: t.String(),
          createdAt: t.Date(),
          updatedAt: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "Ingredient" },
  ),
);

export const IngredientWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.String(), name: t.String() },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [t.Object({ id: t.String() }), t.Object({ name: t.String() })],
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
              name: t.String(),
              category: t.String(),
              defaultUnit: t.String(),
              createdAt: t.Date(),
              updatedAt: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "Ingredient" },
);

export const IngredientSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      name: t.Boolean(),
      category: t.Boolean(),
      defaultUnit: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      recipeIngredients: t.Boolean(),
      stockItems: t.Boolean(),
      shoppingItems: t.Boolean(),
      blacklistItems: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const IngredientInclude = t.Partial(
  t.Object(
    {
      recipeIngredients: t.Boolean(),
      stockItems: t.Boolean(),
      shoppingItems: t.Boolean(),
      blacklistItems: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const IngredientOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      category: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      defaultUnit: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      createdAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updatedAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const Ingredient = t.Composite([IngredientPlain, IngredientRelations], {
  additionalProperties: false,
});

export const IngredientInputCreate = t.Composite(
  [IngredientPlainInputCreate, IngredientRelationsInputCreate],
  { additionalProperties: false },
);

export const IngredientInputUpdate = t.Composite(
  [IngredientPlainInputUpdate, IngredientRelationsInputUpdate],
  { additionalProperties: false },
);

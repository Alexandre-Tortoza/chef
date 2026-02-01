import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const ShoppingItemPlain = t.Object(
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
);

export const ShoppingItemRelations = t.Object(
  {
    shoppingList: t.Object(
      {
        id: t.String(),
        name: t.String(),
        status: t.String(),
        createdAt: t.Date(),
        updatedAt: t.Date(),
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

export const ShoppingItemPlainInputCreate = t.Object(
  {
    quantity: t.String(),
    unit: t.Optional(__nullable__(t.String())),
    purchased: t.Optional(t.Boolean()),
    notes: t.Optional(__nullable__(t.String())),
    priority: t.Optional(t.Integer()),
  },
  { additionalProperties: false },
);

export const ShoppingItemPlainInputUpdate = t.Object(
  {
    quantity: t.Optional(t.String()),
    unit: t.Optional(__nullable__(t.String())),
    purchased: t.Optional(t.Boolean()),
    notes: t.Optional(__nullable__(t.String())),
    priority: t.Optional(t.Integer()),
  },
  { additionalProperties: false },
);

export const ShoppingItemRelationsInputCreate = t.Object(
  {
    shoppingList: t.Object(
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

export const ShoppingItemRelationsInputUpdate = t.Partial(
  t.Object(
    {
      shoppingList: t.Object(
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

export const ShoppingItemWhere = t.Partial(
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
          purchased: t.Boolean(),
          notes: t.String(),
          priority: t.Integer(),
          createdAt: t.Date(),
          updatedAt: t.Date(),
          shoppingListId: t.String(),
          ingredientId: t.String(),
          recipeId: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "ShoppingItem" },
  ),
);

export const ShoppingItemWhereUnique = t.Recursive(
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
              purchased: t.Boolean(),
              notes: t.String(),
              priority: t.Integer(),
              createdAt: t.Date(),
              updatedAt: t.Date(),
              shoppingListId: t.String(),
              ingredientId: t.String(),
              recipeId: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "ShoppingItem" },
);

export const ShoppingItemSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      quantity: t.Boolean(),
      unit: t.Boolean(),
      purchased: t.Boolean(),
      notes: t.Boolean(),
      priority: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      shoppingListId: t.Boolean(),
      shoppingList: t.Boolean(),
      ingredientId: t.Boolean(),
      ingredient: t.Boolean(),
      recipeId: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const ShoppingItemInclude = t.Partial(
  t.Object(
    { shoppingList: t.Boolean(), ingredient: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const ShoppingItemOrderBy = t.Partial(
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
      purchased: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      notes: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      priority: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      createdAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updatedAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      shoppingListId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      ingredientId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      recipeId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const ShoppingItem = t.Composite(
  [ShoppingItemPlain, ShoppingItemRelations],
  { additionalProperties: false },
);

export const ShoppingItemInputCreate = t.Composite(
  [ShoppingItemPlainInputCreate, ShoppingItemRelationsInputCreate],
  { additionalProperties: false },
);

export const ShoppingItemInputUpdate = t.Composite(
  [ShoppingItemPlainInputUpdate, ShoppingItemRelationsInputUpdate],
  { additionalProperties: false },
);

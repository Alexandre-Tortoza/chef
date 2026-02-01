import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const ShoppingListPlain = t.Object(
  {
    id: t.String(),
    name: t.String(),
    status: t.String(),
    createdAt: t.Date(),
    updatedAt: t.Date(),
  },
  { additionalProperties: false },
);

export const ShoppingListRelations = t.Object(
  {
    items: t.Array(
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
  },
  { additionalProperties: false },
);

export const ShoppingListPlainInputCreate = t.Object(
  { name: t.String(), status: t.Optional(t.String()) },
  { additionalProperties: false },
);

export const ShoppingListPlainInputUpdate = t.Object(
  { name: t.Optional(t.String()), status: t.Optional(t.String()) },
  { additionalProperties: false },
);

export const ShoppingListRelationsInputCreate = t.Object(
  {
    items: t.Optional(
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

export const ShoppingListRelationsInputUpdate = t.Partial(
  t.Object(
    {
      items: t.Partial(
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

export const ShoppingListWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          name: t.String(),
          status: t.String(),
          createdAt: t.Date(),
          updatedAt: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "ShoppingList" },
  ),
);

export const ShoppingListWhereUnique = t.Recursive(
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
              name: t.String(),
              status: t.String(),
              createdAt: t.Date(),
              updatedAt: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "ShoppingList" },
);

export const ShoppingListSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      name: t.Boolean(),
      status: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      items: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const ShoppingListInclude = t.Partial(
  t.Object(
    { items: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const ShoppingListOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      status: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const ShoppingList = t.Composite(
  [ShoppingListPlain, ShoppingListRelations],
  { additionalProperties: false },
);

export const ShoppingListInputCreate = t.Composite(
  [ShoppingListPlainInputCreate, ShoppingListRelationsInputCreate],
  { additionalProperties: false },
);

export const ShoppingListInputUpdate = t.Composite(
  [ShoppingListPlainInputUpdate, ShoppingListRelationsInputUpdate],
  { additionalProperties: false },
);

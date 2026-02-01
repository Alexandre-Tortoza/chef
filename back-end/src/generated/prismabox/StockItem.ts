import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const StockItemPlain = t.Object(
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
);

export const StockItemRelations = t.Object(
  {
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

export const StockItemPlainInputCreate = t.Object(
  {
    quantity: t.String(),
    unit: t.Optional(__nullable__(t.String())),
    expiryDate: t.Optional(__nullable__(t.Date())),
    location: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const StockItemPlainInputUpdate = t.Object(
  {
    quantity: t.Optional(t.String()),
    unit: t.Optional(__nullable__(t.String())),
    expiryDate: t.Optional(__nullable__(t.Date())),
    location: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const StockItemRelationsInputCreate = t.Object(
  {
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

export const StockItemRelationsInputUpdate = t.Partial(
  t.Object(
    {
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

export const StockItemWhere = t.Partial(
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
          expiryDate: t.Date(),
          location: t.String(),
          createdAt: t.Date(),
          updatedAt: t.Date(),
          ingredientId: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "StockItem" },
  ),
);

export const StockItemWhereUnique = t.Recursive(
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
              expiryDate: t.Date(),
              location: t.String(),
              createdAt: t.Date(),
              updatedAt: t.Date(),
              ingredientId: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "StockItem" },
);

export const StockItemSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      quantity: t.Boolean(),
      unit: t.Boolean(),
      expiryDate: t.Boolean(),
      location: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      ingredientId: t.Boolean(),
      ingredient: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const StockItemInclude = t.Partial(
  t.Object(
    { ingredient: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const StockItemOrderBy = t.Partial(
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
      expiryDate: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      location: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      createdAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updatedAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      ingredientId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const StockItem = t.Composite([StockItemPlain, StockItemRelations], {
  additionalProperties: false,
});

export const StockItemInputCreate = t.Composite(
  [StockItemPlainInputCreate, StockItemRelationsInputCreate],
  { additionalProperties: false },
);

export const StockItemInputUpdate = t.Composite(
  [StockItemPlainInputUpdate, StockItemRelationsInputUpdate],
  { additionalProperties: false },
);

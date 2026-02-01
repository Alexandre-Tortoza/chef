import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const BlacklistItemPlain = t.Object(
  {
    id: t.String(),
    reason: __nullable__(t.String()),
    createdAt: t.Date(),
    ingredientId: t.String(),
  },
  { additionalProperties: false },
);

export const BlacklistItemRelations = t.Object(
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

export const BlacklistItemPlainInputCreate = t.Object(
  { reason: t.Optional(__nullable__(t.String())) },
  { additionalProperties: false },
);

export const BlacklistItemPlainInputUpdate = t.Object(
  { reason: t.Optional(__nullable__(t.String())) },
  { additionalProperties: false },
);

export const BlacklistItemRelationsInputCreate = t.Object(
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

export const BlacklistItemRelationsInputUpdate = t.Partial(
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

export const BlacklistItemWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          reason: t.String(),
          createdAt: t.Date(),
          ingredientId: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "BlacklistItem" },
  ),
);

export const BlacklistItemWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.String(), ingredientId: t.String() },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [
            t.Object({ id: t.String() }),
            t.Object({ ingredientId: t.String() }),
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
              reason: t.String(),
              createdAt: t.Date(),
              ingredientId: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "BlacklistItem" },
);

export const BlacklistItemSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      reason: t.Boolean(),
      createdAt: t.Boolean(),
      ingredientId: t.Boolean(),
      ingredient: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const BlacklistItemInclude = t.Partial(
  t.Object(
    { ingredient: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const BlacklistItemOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      reason: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      createdAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      ingredientId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const BlacklistItem = t.Composite(
  [BlacklistItemPlain, BlacklistItemRelations],
  { additionalProperties: false },
);

export const BlacklistItemInputCreate = t.Composite(
  [BlacklistItemPlainInputCreate, BlacklistItemRelationsInputCreate],
  { additionalProperties: false },
);

export const BlacklistItemInputUpdate = t.Composite(
  [BlacklistItemPlainInputUpdate, BlacklistItemRelationsInputUpdate],
  { additionalProperties: false },
);

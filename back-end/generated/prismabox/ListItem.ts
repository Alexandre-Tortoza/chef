import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const ListItemPlain = t.Object(
  {
    id: t.String(),
    item: t.String(),
    quantity: t.String(),
    description: t.String(),
    recurrent: t.Boolean(),
    listId: t.String(),
  },
  { additionalProperties: false },
);

export const ListItemRelations = t.Object(
  {
    list: t.Object(
      {
        id: t.String(),
        title: t.String(),
        active: t.Boolean(),
        ownerId: t.String(),
      },
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const ListItemPlainInputCreate = t.Object(
  {
    item: t.String(),
    quantity: t.String(),
    description: t.String(),
    recurrent: t.Boolean(),
  },
  { additionalProperties: false },
);

export const ListItemPlainInputUpdate = t.Object(
  {
    item: t.Optional(t.String()),
    quantity: t.Optional(t.String()),
    description: t.Optional(t.String()),
    recurrent: t.Optional(t.Boolean()),
  },
  { additionalProperties: false },
);

export const ListItemRelationsInputCreate = t.Object(
  {
    list: t.Object(
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

export const ListItemRelationsInputUpdate = t.Partial(
  t.Object(
    {
      list: t.Object(
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

export const ListItemWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          item: t.String(),
          quantity: t.String(),
          description: t.String(),
          recurrent: t.Boolean(),
          listId: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "ListItem" },
  ),
);

export const ListItemWhereUnique = t.Recursive(
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
              item: t.String(),
              quantity: t.String(),
              description: t.String(),
              recurrent: t.Boolean(),
              listId: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "ListItem" },
);

export const ListItemSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      item: t.Boolean(),
      quantity: t.Boolean(),
      description: t.Boolean(),
      recurrent: t.Boolean(),
      list: t.Boolean(),
      listId: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const ListItemInclude = t.Partial(
  t.Object(
    { list: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const ListItemOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      item: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      quantity: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      description: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      recurrent: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      listId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const ListItem = t.Composite([ListItemPlain, ListItemRelations], {
  additionalProperties: false,
});

export const ListItemInputCreate = t.Composite(
  [ListItemPlainInputCreate, ListItemRelationsInputCreate],
  { additionalProperties: false },
);

export const ListItemInputUpdate = t.Composite(
  [ListItemPlainInputUpdate, ListItemRelationsInputUpdate],
  { additionalProperties: false },
);

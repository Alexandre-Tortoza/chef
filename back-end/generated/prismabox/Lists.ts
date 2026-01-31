import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const ListsPlain = t.Object(
  {
    id: t.String(),
    title: t.String(),
    active: t.Boolean(),
    ownerId: t.String(),
  },
  { additionalProperties: false },
);

export const ListsRelations = t.Object(
  {
    owner: t.Object(
      { id: t.String(), email: t.String(), name: __nullable__(t.String()) },
      { additionalProperties: false },
    ),
    listItems: t.Array(
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
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const ListsPlainInputCreate = t.Object(
  { title: t.String(), active: t.Optional(t.Boolean()) },
  { additionalProperties: false },
);

export const ListsPlainInputUpdate = t.Object(
  { title: t.Optional(t.String()), active: t.Optional(t.Boolean()) },
  { additionalProperties: false },
);

export const ListsRelationsInputCreate = t.Object(
  {
    owner: t.Object(
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
    listItems: t.Optional(
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

export const ListsRelationsInputUpdate = t.Partial(
  t.Object(
    {
      owner: t.Object(
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
      listItems: t.Partial(
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

export const ListsWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          title: t.String(),
          active: t.Boolean(),
          ownerId: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "Lists" },
  ),
);

export const ListsWhereUnique = t.Recursive(
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
              active: t.Boolean(),
              ownerId: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "Lists" },
);

export const ListsSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      title: t.Boolean(),
      active: t.Boolean(),
      owner: t.Boolean(),
      ownerId: t.Boolean(),
      listItems: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const ListsInclude = t.Partial(
  t.Object(
    { owner: t.Boolean(), listItems: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const ListsOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      title: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      active: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      ownerId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const Lists = t.Composite([ListsPlain, ListsRelations], {
  additionalProperties: false,
});

export const ListsInputCreate = t.Composite(
  [ListsPlainInputCreate, ListsRelationsInputCreate],
  { additionalProperties: false },
);

export const ListsInputUpdate = t.Composite(
  [ListsPlainInputUpdate, ListsRelationsInputUpdate],
  { additionalProperties: false },
);

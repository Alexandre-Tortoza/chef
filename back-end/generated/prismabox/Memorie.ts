import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const MemoriePlain = t.Object(
  {
    id: t.String(),
    ownerId: t.String(),
    data: t.String(),
    createdAt: t.Date(),
    updatedAt: t.Date(),
  },
  { additionalProperties: false },
);

export const MemorieRelations = t.Object({}, { additionalProperties: false });

export const MemoriePlainInputCreate = t.Object(
  { data: t.String() },
  { additionalProperties: false },
);

export const MemoriePlainInputUpdate = t.Object(
  { data: t.Optional(t.String()) },
  { additionalProperties: false },
);

export const MemorieRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const MemorieRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const MemorieWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          ownerId: t.String(),
          data: t.String(),
          createdAt: t.Date(),
          updatedAt: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "Memorie" },
  ),
);

export const MemorieWhereUnique = t.Recursive(
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
              ownerId: t.String(),
              data: t.String(),
              createdAt: t.Date(),
              updatedAt: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "Memorie" },
);

export const MemorieSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      ownerId: t.Boolean(),
      data: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const MemorieInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const MemorieOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      ownerId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      data: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const Memorie = t.Composite([MemoriePlain, MemorieRelations], {
  additionalProperties: false,
});

export const MemorieInputCreate = t.Composite(
  [MemoriePlainInputCreate, MemorieRelationsInputCreate],
  { additionalProperties: false },
);

export const MemorieInputUpdate = t.Composite(
  [MemoriePlainInputUpdate, MemorieRelationsInputUpdate],
  { additionalProperties: false },
);

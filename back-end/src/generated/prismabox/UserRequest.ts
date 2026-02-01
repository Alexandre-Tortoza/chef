import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const UserRequestPlain = t.Object(
  {
    id: t.String(),
    requestText: t.String(),
    llmResponse: t.String(),
    actionType: t.String(),
    createdAt: t.Date(),
    metadata: __nullable__(t.String()),
  },
  { additionalProperties: false },
);

export const UserRequestRelations = t.Object(
  {
    recipe: __nullable__(
      t.Object(
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
    ),
  },
  { additionalProperties: false },
);

export const UserRequestPlainInputCreate = t.Object(
  {
    requestText: t.String(),
    llmResponse: t.String(),
    actionType: t.String(),
    metadata: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const UserRequestPlainInputUpdate = t.Object(
  {
    requestText: t.Optional(t.String()),
    llmResponse: t.Optional(t.String()),
    actionType: t.Optional(t.String()),
    metadata: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const UserRequestRelationsInputCreate = t.Object(
  {
    recipe: t.Optional(
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

export const UserRequestRelationsInputUpdate = t.Partial(
  t.Object(
    {
      recipe: t.Partial(
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

export const UserRequestWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          requestText: t.String(),
          llmResponse: t.String(),
          actionType: t.String(),
          createdAt: t.Date(),
          metadata: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "UserRequest" },
  ),
);

export const UserRequestWhereUnique = t.Recursive(
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
              requestText: t.String(),
              llmResponse: t.String(),
              actionType: t.String(),
              createdAt: t.Date(),
              metadata: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "UserRequest" },
);

export const UserRequestSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      requestText: t.Boolean(),
      llmResponse: t.Boolean(),
      actionType: t.Boolean(),
      createdAt: t.Boolean(),
      recipe: t.Boolean(),
      metadata: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const UserRequestInclude = t.Partial(
  t.Object(
    { recipe: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const UserRequestOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      requestText: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      llmResponse: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      actionType: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      createdAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      metadata: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const UserRequest = t.Composite(
  [UserRequestPlain, UserRequestRelations],
  { additionalProperties: false },
);

export const UserRequestInputCreate = t.Composite(
  [UserRequestPlainInputCreate, UserRequestRelationsInputCreate],
  { additionalProperties: false },
);

export const UserRequestInputUpdate = t.Composite(
  [UserRequestPlainInputUpdate, UserRequestRelationsInputUpdate],
  { additionalProperties: false },
);

import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const RecurringPlanPlain = t.Object(
  {
    id: t.String(),
    name: t.String(),
    description: __nullable__(t.String()),
    frequency: t.String(),
    startDate: t.Date(),
    endDate: __nullable__(t.Date()),
    active: t.Boolean(),
    createdAt: t.Date(),
    updatedAt: t.Date(),
  },
  { additionalProperties: false },
);

export const RecurringPlanRelations = t.Object(
  {
    items: t.Array(
      t.Object(
        {
          id: t.String(),
          dayOfWeek: __nullable__(t.Integer()),
          dayOfMonth: __nullable__(t.Integer()),
          mealType: __nullable__(t.String()),
          recurringPlanId: t.String(),
          recipeId: t.String(),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const RecurringPlanPlainInputCreate = t.Object(
  {
    name: t.String(),
    description: t.Optional(__nullable__(t.String())),
    frequency: t.String(),
    startDate: t.Date(),
    endDate: t.Optional(__nullable__(t.Date())),
    active: t.Optional(t.Boolean()),
  },
  { additionalProperties: false },
);

export const RecurringPlanPlainInputUpdate = t.Object(
  {
    name: t.Optional(t.String()),
    description: t.Optional(__nullable__(t.String())),
    frequency: t.Optional(t.String()),
    startDate: t.Optional(t.Date()),
    endDate: t.Optional(__nullable__(t.Date())),
    active: t.Optional(t.Boolean()),
  },
  { additionalProperties: false },
);

export const RecurringPlanRelationsInputCreate = t.Object(
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

export const RecurringPlanRelationsInputUpdate = t.Partial(
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

export const RecurringPlanWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          name: t.String(),
          description: t.String(),
          frequency: t.String(),
          startDate: t.Date(),
          endDate: t.Date(),
          active: t.Boolean(),
          createdAt: t.Date(),
          updatedAt: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "RecurringPlan" },
  ),
);

export const RecurringPlanWhereUnique = t.Recursive(
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
              description: t.String(),
              frequency: t.String(),
              startDate: t.Date(),
              endDate: t.Date(),
              active: t.Boolean(),
              createdAt: t.Date(),
              updatedAt: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "RecurringPlan" },
);

export const RecurringPlanSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      name: t.Boolean(),
      description: t.Boolean(),
      frequency: t.Boolean(),
      startDate: t.Boolean(),
      endDate: t.Boolean(),
      active: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      items: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const RecurringPlanInclude = t.Partial(
  t.Object(
    { items: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const RecurringPlanOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      description: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      frequency: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      startDate: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      endDate: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      active: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const RecurringPlan = t.Composite(
  [RecurringPlanPlain, RecurringPlanRelations],
  { additionalProperties: false },
);

export const RecurringPlanInputCreate = t.Composite(
  [RecurringPlanPlainInputCreate, RecurringPlanRelationsInputCreate],
  { additionalProperties: false },
);

export const RecurringPlanInputUpdate = t.Composite(
  [RecurringPlanPlainInputUpdate, RecurringPlanRelationsInputUpdate],
  { additionalProperties: false },
);

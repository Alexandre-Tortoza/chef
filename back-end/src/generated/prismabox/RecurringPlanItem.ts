import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const RecurringPlanItemPlain = t.Object(
  {
    id: t.String(),
    dayOfWeek: __nullable__(t.Integer()),
    dayOfMonth: __nullable__(t.Integer()),
    mealType: __nullable__(t.String()),
    recurringPlanId: t.String(),
    recipeId: t.String(),
  },
  { additionalProperties: false },
);

export const RecurringPlanItemRelations = t.Object(
  {
    recurringPlan: t.Object(
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
    ),
  },
  { additionalProperties: false },
);

export const RecurringPlanItemPlainInputCreate = t.Object(
  {
    dayOfWeek: t.Optional(__nullable__(t.Integer())),
    dayOfMonth: t.Optional(__nullable__(t.Integer())),
    mealType: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const RecurringPlanItemPlainInputUpdate = t.Object(
  {
    dayOfWeek: t.Optional(__nullable__(t.Integer())),
    dayOfMonth: t.Optional(__nullable__(t.Integer())),
    mealType: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const RecurringPlanItemRelationsInputCreate = t.Object(
  {
    recurringPlan: t.Object(
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

export const RecurringPlanItemRelationsInputUpdate = t.Partial(
  t.Object(
    {
      recurringPlan: t.Object(
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

export const RecurringPlanItemWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          dayOfWeek: t.Integer(),
          dayOfMonth: t.Integer(),
          mealType: t.String(),
          recurringPlanId: t.String(),
          recipeId: t.String(),
        },
        { additionalProperties: false },
      ),
    { $id: "RecurringPlanItem" },
  ),
);

export const RecurringPlanItemWhereUnique = t.Recursive(
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
              dayOfWeek: t.Integer(),
              dayOfMonth: t.Integer(),
              mealType: t.String(),
              recurringPlanId: t.String(),
              recipeId: t.String(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "RecurringPlanItem" },
);

export const RecurringPlanItemSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      dayOfWeek: t.Boolean(),
      dayOfMonth: t.Boolean(),
      mealType: t.Boolean(),
      recurringPlanId: t.Boolean(),
      recurringPlan: t.Boolean(),
      recipeId: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const RecurringPlanItemInclude = t.Partial(
  t.Object(
    { recurringPlan: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const RecurringPlanItemOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      dayOfWeek: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      dayOfMonth: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      mealType: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      recurringPlanId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      recipeId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const RecurringPlanItem = t.Composite(
  [RecurringPlanItemPlain, RecurringPlanItemRelations],
  { additionalProperties: false },
);

export const RecurringPlanItemInputCreate = t.Composite(
  [RecurringPlanItemPlainInputCreate, RecurringPlanItemRelationsInputCreate],
  { additionalProperties: false },
);

export const RecurringPlanItemInputUpdate = t.Composite(
  [RecurringPlanItemPlainInputUpdate, RecurringPlanItemRelationsInputUpdate],
  { additionalProperties: false },
);

import { t, type Static } from "elysia";

const CreateBody = t.Object({
  name: t.String(),
  email: t.String(),
  password: t.String(),
});

const CreateStatus201 = t.Object({
  id: t.Number(),
  name: t.String(),
  email: t.String(),
});

export const CreateSchema = {
  body: CreateBody,
  response: {
    201: CreateStatus201,
  },
} as const;

export type CreateCommand = Static<typeof CreateSchema.body>;
export type CreateResponse = Static<typeof CreateSchema.response[201]>;

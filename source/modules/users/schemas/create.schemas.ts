import { t, type Static } from "elysia";

const CreateCommand = t.Object({
  name: t.String(),
  email: t.String(),
  password: t.String(),
});

const CreateResponse = t.Object({
  id: t.Number(),
  name: t.String(),
  email: t.String(),
});

export const CreateSchemas = {
  body: CreateCommand,
  response: {
    201: CreateResponse,
  },
} as const;

export type CreateCommand = Static<typeof CreateCommand>;
export type CreateResponse = Static<typeof CreateResponse>;

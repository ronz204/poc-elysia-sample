import { t, type Static } from "elysia";

const RetrieveQuery = t.Object({
  page: t.Optional(t.Number()),
  limit: t.Optional(t.Number()),
});

const RetrieveStatus200 = t.Object({
  users: t.Array(t.Object({
    id: t.Number(),
    name: t.String(),
    email: t.String(),
  }))
});

export const RetrieveSchema = {
  query: RetrieveQuery,
  response: {
    200: RetrieveStatus200,
  },
} as const;

export type RetrieveQuery = Static<typeof RetrieveSchema.query>;
export type RetrieveResponse = Static<typeof RetrieveSchema.response[200]>;

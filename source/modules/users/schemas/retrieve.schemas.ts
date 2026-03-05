import { t, type Static } from "elysia";

const RetrieveQuery = t.Object({
  page: t.Optional(t.Number()),
  limit: t.Optional(t.Number()),
});

const RetrieveResponse = t.Array(t.Object({
  id: t.Number(),
  name: t.String(),
  email: t.String(),
}));

export const RetrieveSchemas = {
  query: RetrieveQuery,
  response: {
    200: RetrieveResponse,
  },
} as const;

export type RetrieveQuery = Static<typeof RetrieveQuery>;
export type RetrieveResponse = Static<typeof RetrieveResponse>;

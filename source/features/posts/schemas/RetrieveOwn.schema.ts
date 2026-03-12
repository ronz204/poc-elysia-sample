import { t, type Static } from "elysia";

const RetrieveOwnQuery = t.Object({
  page: t.Optional(t.Number()),
  limit: t.Optional(t.Number()),
});

const RetrieveOwnPayload = t.Object({
  user: t.Number(),
  query: RetrieveOwnQuery,
});

export const RetrieveOwnResponse = t.Array(t.Object({
  id: t.Number(),
  title: t.String(),
  author: t.String(),
  content: t.String(),
}));

export const RetrieveOwnSchema = {
  query: RetrieveOwnQuery,
  payload: RetrieveOwnPayload,
  response: {
    200: RetrieveOwnResponse,
  },
} as const;

export type RetrieveOwnQuery = Static<typeof RetrieveOwnQuery>;
export type RetrieveOwnPayload = Static<typeof RetrieveOwnPayload>;
export type RetrieveOwnResponse = Static<typeof RetrieveOwnResponse>;

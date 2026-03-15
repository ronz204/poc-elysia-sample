import { t, type Static } from "elysia";

const RetrieveRequest = t.Object({
  user: t.Number(),
});

const RetrieveResponse = t.Object({
  id: t.Number(),
  name: t.String(),
  posts: t.Array(t.Object({
    id: t.Number(),
    title: t.String(),
    content: t.String(),
  })),
});

export const RetrieveSchema = {
  request: RetrieveRequest,
  response: {
    200: RetrieveResponse,
  },
} as const;

export type RetrieveRequest = Static<typeof RetrieveRequest>;
export type RetrieveResponse = Static<typeof RetrieveResponse>;

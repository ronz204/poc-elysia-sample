import { t } from "elysia";

const RetrieveQuery = t.Object({
  page: t.Optional(t.Number()),
  limit: t.Optional(t.Number()),
});

const Status200 = t.Object({
  users: t.Array(t.Object({
    id: t.Number(),
    name: t.String(),
    email: t.String()
  }))
});

export const RetrieveUsersSchemas = {
  query: RetrieveQuery,
  responses: [Status200],
};

export type RetrieveUsers200 = typeof Status200.static;
export type RetrieveUserQuery = typeof RetrieveQuery.static;

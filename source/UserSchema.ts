import { t } from "elysia";

const UserDTO = t.Object({
  id: t.Number(),
  name: t.String(),
  email: t.String()
});

const RetrieveQuery = t.Object({
  page: t.Optional(t.Number()),
  limit: t.Optional(t.Number()),
});

const RetrieveStatus200 = t.Object({
  users: t.Array(UserDTO)
});

export const RetrieveSchema = {
  query: RetrieveQuery,
  responses: {
    200: RetrieveStatus200,
  },
} as const;

export type RetrieveUserQuery = typeof RetrieveQuery.static;
export type RetrieveUserStatus200 = typeof RetrieveStatus200.static;

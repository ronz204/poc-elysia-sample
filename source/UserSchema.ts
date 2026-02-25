import { t } from "elysia";

export const ListUser200Response = t.Object({
  users: t.Array(t.Object({
    id: t.Number(),
    name: t.String(),
    email: t.String()
  }))
});

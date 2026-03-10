import { t, type Static } from "elysia";

const UpdateCommand = t.Object({
  id: t.Number(),
  name: t.Optional(t.String()),
  email: t.Optional(t.String()),
});

const UpdateResponse = t.Object({
  id: t.Number(),
  name: t.String(),
  email: t.String(),
});

export const UpdateSchema = {
  body: UpdateCommand,
  response: {
    200: UpdateResponse,
  },
} as const;

export type UpdateCommand = Static<typeof UpdateCommand>;
export type UpdateResponse = Static<typeof UpdateResponse>;

import { t, type Static } from "elysia";

const RemoveCommand = t.Object({
  id: t.Number(),
});

export const RemoveResponse = t.Object({
  success: t.Boolean(),
});

export const RemoveSchema = {
  body: RemoveCommand,
  response: {
    200: RemoveResponse,
  },
} as const;

export type RemoveCommand = Static<typeof RemoveCommand>;
export type RemoveResponse = Static<typeof RemoveResponse>;

import { t, type Static } from "elysia";

export const AccessQuery = t.Object({
  token: t.String(),
});

export const AccessSchema = t.Object({
  userId: t.Number(),
});

export const AccessHeaders = t.Object({
  authorization: t.Optional(t.String()),
});

export const AccessResponse = {
  401: t.Object({
    error: t.Literal("Unauthorized"),
    message: t.String(),
  }),
} as const;

export type AccessQuery = Static<typeof AccessQuery>;
export type AccessSchema = Static<typeof AccessSchema>;
export type AccessHeaders = Static<typeof AccessHeaders>;

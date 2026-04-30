import { t, type Static } from "elysia";

export const SessionSchema = t.Object({
  address: t.String(),
  agent: t.String(),
  device: t.String(),
});

export type SessionInfo = Static<typeof SessionSchema>;

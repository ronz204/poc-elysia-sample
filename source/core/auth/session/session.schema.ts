import { t, type Static } from "elysia";

export const AgentSchema = t.Object({
  address: t.String(),
  agent: t.String(),
  device: t.String(),
});

export const CookieSchema = t.Cookie({
  refresh: t.Optional(t.String()),
});

export type AgentInfo = Static<typeof AgentSchema>;
export type CookieInfo = Static<typeof CookieSchema>;

import { t, type Static } from "elysia";
import { AgentSchema } from "@auth/session/session.schema";

export const RefreshTokenRequest = t.Object({
  refresh: t.String(),
  ua: AgentSchema,
});

export const RefreshTokenPayload = t.Object({
  userId: t.Number(),
  refreshToken: t.String(),
});

export const RefreshTokenResponse = t.Object({
  token: t.String(),
  type: t.String(),
});

export type RefreshTokenRequest = Static<typeof RefreshTokenRequest>;
export type RefreshTokenPayload = Static<typeof RefreshTokenPayload>;
export type RefreshTokenResponse = Static<typeof RefreshTokenResponse>;

import { t, type Static } from "elysia";
import { SessionSchema } from "@auth/session/session.schema";

export const AuthSignInBody = t.Object({
  email: t.String({ format: "email", maxLength: 255 }),
  password: t.String({ minLength: 8, maxLength: 64 }),
});

export const AuthSignInRequest = t.Object({
  body: AuthSignInBody,
  ua: SessionSchema,
});

export const AuthSignInPayload = t.Object({
  userId: t.Number(),
  refresh: t.String(),
});

export const AuthSignInResponse = t.Object({
  token: t.String(),
  type: t.String(),
});

export type AuthSignInRequest = Static<typeof AuthSignInRequest>;
export type AuthSignInPayload = Static<typeof AuthSignInPayload>;
export type AuthSignInResponse = Static<typeof AuthSignInResponse>;

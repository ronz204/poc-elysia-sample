import { t, type Static } from "elysia";
import { AgentSchema } from "@auth/session/session.schema";

export const AuthSignUpBody = t.Object({
  name: t.String({ minLength: 4, maxLength: 20 }),
  email: t.String({ format: "email", maxLength: 255 }),
  password: t.String({ minLength: 8, maxLength: 64 }),
});

export const AuthSignUpRequest = t.Object({
  body: AuthSignUpBody,
  ua: AgentSchema,
});

export const AuthSignUpPayload = t.Object({
  userId: t.Number(),
  refreshToken: t.String(),
});

export const AuthSignUpResponse = t.Object({
  token: t.String(),
  type: t.String(),
});

export type AuthSignUpRequest = Static<typeof AuthSignUpRequest>;
export type AuthSignUpPayload = Static<typeof AuthSignUpPayload>;
export type AuthSignUpResponse = Static<typeof AuthSignUpResponse>;

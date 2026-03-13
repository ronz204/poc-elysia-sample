import { t, type Static } from "elysia";

const RegisterBody = t.Object({
  name: t.String(),
  email: t.String(),
  password: t.String(),
});

const RegisterRequest = t.Object({
  body: RegisterBody,
});

const RegisterResponse = t.Object({
  id: t.Number(),
  name: t.String(),
  email: t.String(),
});

export const RegisterSchema = {
  body: RegisterBody,
  request: RegisterRequest,
  response: {
    201: RegisterResponse,
  },
} as const;

export type RegisterBody = Static<typeof RegisterBody>;
export type RegisterRequest = Static<typeof RegisterRequest>;
export type RegisterResponse = Static<typeof RegisterResponse>;

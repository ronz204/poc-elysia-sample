import { t, type Static } from "elysia";

export const SandboxResponse = t.Object({
  message: t.String(),
});

export type SandboxResponse = Static<typeof SandboxResponse>;
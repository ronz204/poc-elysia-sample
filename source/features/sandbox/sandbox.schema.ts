import { t, type Static } from "elysia";

export const SocketMessage = t.Object({
  event: t.Union([
    t.Literal("typing:start"),
    t.Literal("typing:stop"),
  ]),
});

export const SandboxResponse = t.Object({
  message: t.String(),
});

export type SandboxResponse = Static<typeof SandboxResponse>;
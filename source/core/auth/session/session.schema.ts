import { t, type Static } from "elysia";

export const UAInfoSchema = t.Object({
  address: t.String(),
  agent: t.String(),
  device: t.String(),
});

export type UAInfo = Static<typeof UAInfoSchema>;

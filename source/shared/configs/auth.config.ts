import { z } from "zod";

const envSchema = z.object({
  SECRET: z.string().min(8),
  ACCESS_TTL: z.string().default("15m"),
  REFRESH_TTL: z.number().default(7 * 24 * 60 * 60),
});

export const AuthConfig = envSchema.parse(process.env);

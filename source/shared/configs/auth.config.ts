import { z } from "zod";

const envSchema = z.object({
  JWT_SECRET: z.string().min(8),
  REFRESH_TTL: z.number().default(7 * 24 * 60 * 60),
});

export const AuthConfig = envSchema.parse(process.env);

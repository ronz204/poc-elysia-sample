import { z } from "zod";

const envSchema = z.object({
  JWT_SECRET: z.string().min(8),
});

export const AuthConfig = envSchema.parse(process.env);

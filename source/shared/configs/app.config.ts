import { z } from "zod";

const envSchema = z.object({
  APP_NAME: z.string(),
  APP_DOCS: z.string(),
  APP_DOMAIN: z.string(),
  APP_VERSION: z.string(),
  APP_PORT: z.string().transform((val) => parseInt(val, 10)),
});

export const AppConfig = envSchema.parse(process.env);

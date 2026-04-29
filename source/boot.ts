import { Elysia } from "elysia";
import { AppConfig } from "@configs/app.config";
import { CorsPlugin } from "@plugins/cors.plugin";
import { ErrorPlugin } from "@plugins/errors.plugin";
import { HealthPlugin } from "@plugins/health.plugin";
import { ScalarPlugin } from "@plugins/scalar.plugin";

import { IdentityPlugin } from "@features/identity/identity.plugin";

export const app = new Elysia({ prefix: "/api" })
  .use(ErrorPlugin)
  .use(CorsPlugin)
  .use(HealthPlugin)
  .use(ScalarPlugin)
  .use(IdentityPlugin)
  .listen(AppConfig.APP_PORT);

console.log(`🦊 Elysia is running at ${AppConfig.APP_DOMAIN}`);

import { Elysia } from "elysia";
import { CorsPlugin } from "@plugins/cors.plugin";
import { ErrorPlugin } from "@plugins/errors.plugin";
import { HealthPlugin } from "@plugins/health.plugin";
import { ScalarPlugin } from "@plugins/scalar.plugin";

import { IdentityPlugin } from "@features/identity/plugin";

export const app = new Elysia({ prefix: "/api" })
  .use(ErrorPlugin)
  .use(CorsPlugin)
  .use(HealthPlugin)
  .use(ScalarPlugin)
  .use(IdentityPlugin)
  .listen(3000);

const url = `http://${app.server?.hostname}:${app.server?.port}`;
console.log(`🦊 Elysia is running at ${url}`);

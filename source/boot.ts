import { env } from "@env";
import { Elysia } from "elysia";
import { CorsPlugin } from "@plugins/cors.plugin";
import { HealthPlugin } from "@plugins/health.plugin";
import { ScalarPlugin } from "@plugins/scalar.plugin";

import { SandboxPlugin } from "@features/sandbox/sandbox.plugin";
import { IdentityPlugin } from "@features/identity/identity.plugin";

export const app = new Elysia({ prefix: "/api" })
  .use(CorsPlugin)
  .use(HealthPlugin)
  .use(ScalarPlugin)
  .use(SandboxPlugin)
  .use(IdentityPlugin)
  .listen(env.APP_PORT);

const url = `http://${app.server?.hostname}:${app.server?.port}`;
console.log(`🦊 Elysia is running at ${url}`);

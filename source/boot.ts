import { Elysia } from "elysia";
import { LogixPlugin } from "@plugins/logger.plugin";
import { ErrorsPlugin } from "@plugins/errors.plugin";
import { HealthPlugin } from "@plugins/health.plugin";

export const app = new Elysia({ prefix: "/api" })
  .use(ErrorsPlugin)
  .use(LogixPlugin)
  .use(HealthPlugin)
  .listen(3000);

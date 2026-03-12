import { Elysia } from "elysia";
import { LogixPlugin } from "@plugins/logger.plugin";
import { ErrorsPlugin } from "@plugins/errors.plugin";
import { HealthPlugin } from "@plugins/health.plugin";
import { UsersPlugin } from "@features/users/users.plugin";

export const app = new Elysia({ prefix: "/api" })
  .use(ErrorsPlugin)
  .use(LogixPlugin)
  .use(HealthPlugin)
  .use(UsersPlugin)
  .listen(3000);

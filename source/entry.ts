import { Elysia } from "elysia";
import { LogixPlugin } from "@plugins/logix.plugin";
import { ErrorsPlugin } from "@plugins/errors.plugin";
import { UsersPlugin } from "./features/users/user.plugin";

export const app = new Elysia()
  .use(LogixPlugin)
  .use(ErrorsPlugin)
  .use(UsersPlugin)
  .listen(3000);

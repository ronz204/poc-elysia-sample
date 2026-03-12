import { Elysia } from "elysia";
import { LogixPlugin } from "@logging/Logix.plugin";
import { ErrorsPlugin } from "@errors/Errors.plugin";
import { UsersPlugin } from "./features/users/user.plugin";

export const app = new Elysia()
  .use(LogixPlugin)
  .use(ErrorsPlugin)
  .use(UsersPlugin)
  .listen(3000);

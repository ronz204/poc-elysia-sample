import { Elysia } from "elysia";
import { ErrorsPlugin } from "@plugins/errors.plugin";
import { UsersPlugin } from "./features/users/user.plugin";

const app = new Elysia()
  .use(ErrorsPlugin)
  .use(UsersPlugin)
  .listen(3000);

const url = `http://${app.server?.hostname}:${app.server?.port}`;
console.log(`🦊 Elysia is running at ${url}`);

import { CreatePlugin } from "./create.plugin";
import { Elysia } from "elysia";

export const UsersPlugin = new Elysia({ prefix: "/users" })
  .use(CreatePlugin);

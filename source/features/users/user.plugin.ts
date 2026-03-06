import { Elysia } from "elysia";
import { CreatePlugin } from "./plugins/create.plugin";
import { RetrievePlugin } from "./plugins/retrieve.plugin";

export const UsersPlugin = new Elysia({ prefix: "/users" })
  .use(CreatePlugin)
  .use(RetrievePlugin);

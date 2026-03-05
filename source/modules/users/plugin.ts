import { RetrievePlugin } from "./plugins/retrieve.plugin";
import { CreatePlugin } from "./plugins/create.plugin";
import { Elysia } from "elysia";

export const UsersPlugin = new Elysia({ prefix: "/users" })
  .use(RetrievePlugin)
  .use(CreatePlugin);

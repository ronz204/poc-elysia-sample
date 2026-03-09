import { Elysia } from "elysia";
import { CreatePlugin } from "./plugins/create.plugin";
import { RemovePlugin } from "./plugins/remove.plugin";
import { RetrievePlugin } from "./plugins/retrieve.plugin";

export const UsersPlugin = new Elysia({ prefix: "/users" })
  .use(CreatePlugin)
  .use(RemovePlugin)
  .use(RetrievePlugin);

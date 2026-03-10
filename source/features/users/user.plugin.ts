import { Elysia } from "elysia";
import { CreatePlugin } from "./plugins/create.plugin";
import { UpdatePlugin } from "./plugins/update.plugin";
import { RemovePlugin } from "./plugins/remove.plugin";
import { RetrievePlugin } from "./plugins/retrieve.plugin";

export const UsersPlugin = new Elysia({ prefix: "/users", name: "users"})
  .use(CreatePlugin)
  .use(UpdatePlugin)
  .use(RemovePlugin)
  .use(RetrievePlugin);

import { RetrievePlugin } from "./retrieve/retrieve.plugin";
import { CreatePlugin } from "./create/create.plugin";
import { Elysia } from "elysia";

export const UsersPlugin = new Elysia({ prefix: "/users" })
  .use(RetrievePlugin)
  .use(CreatePlugin);

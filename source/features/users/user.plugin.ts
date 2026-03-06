import { Elysia } from "elysia";
import { RetrievePlugin } from "./plugins/retrieve.plugin";

export const UsersPlugin = new Elysia({ prefix: "/users" })
  .use(RetrievePlugin);

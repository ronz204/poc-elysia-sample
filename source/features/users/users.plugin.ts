import { Elysia, type ElysiaConfig } from "elysia";
import { RegisterPlugin } from "./core/register/register.plugin";

const config: ElysiaConfig<"/users"> = {
  prefix: "/users", name: "users.plugin",
};

export const UsersPlugin = new Elysia(config)
  .use(RegisterPlugin);

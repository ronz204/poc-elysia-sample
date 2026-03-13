import { Elysia, type ElysiaConfig } from "elysia";
import { ProfilePlugin } from "./core/profile/profile.plugin";
import { RegisterPlugin } from "./core/register/register.plugin";

const config: ElysiaConfig<"/users"> = {
  prefix: "/users", name: "users.plugin",
};

export const UsersPlugin = new Elysia(config)
  .use(ProfilePlugin)
  .use(RegisterPlugin);

import { Elysia, type ElysiaConfig } from "elysia";
import { RetrievePlugin } from "./core/retrieve/retrieve.plugin";

const config: ElysiaConfig<"/profile"> = {
  prefix: "/profile", name: "profile.plugin",
};

export const ProfilePlugin = new Elysia(config)
  .use(RetrievePlugin);

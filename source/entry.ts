import { Elysia } from "elysia";
import { logixlysia } from "logixlysia";
import { ErrorsPlugin } from "@plugins/errors.plugin";
import { UsersPlugin } from "./features/users/user.plugin";

export const app = new Elysia()
  .use(logixlysia({
    config: {
      showStartupMessage: true,
      startupMessageFormat: "banner",

      pino: {
        level: "info",
        prettyPrint: {
          colorize: true,
          translateTime: 'HH:MM:ss Z',
          ignore: 'pid,hostname'
        },
      },
    },
  }))
  .use(ErrorsPlugin)
  .use(UsersPlugin)
  .listen(3000);

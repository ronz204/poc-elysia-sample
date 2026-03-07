import { pino } from  "pino";
import { Elysia } from "elysia";
import { logixlysia } from "logixlysia";
import { ErrorsPlugin } from "@plugins/errors.plugin";
import { UsersPlugin } from "./features/users/user.plugin";

export const logger = pino({
  level: "info",
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'HH:MM:ss Z',
      ignore: 'pid,hostname',
    },
  },
});

export const app = new Elysia()
  .use(logixlysia({
    config: {
      pino: logger,
      showStartupMessage: true,
      startupMessageFormat: "banner",
    },
  }))
  .use(ErrorsPlugin)
  .use(UsersPlugin)
  .listen(3000);

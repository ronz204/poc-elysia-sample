import { Elysia } from "elysia";
import { logger } from "./pino.helper";
import { logixlysia } from "logixlysia";

export const LogixPlugin = new Elysia()
  .use(logixlysia({
    config: {
      pino: logger,
      showStartupMessage: true,
      startupMessageFormat: "banner",
    },
  }));

import { Elysia } from "elysia";
import { logixlysia } from "logixlysia";
import { logger } from "./Pino.helper";

export const LogixPlugin = new Elysia()
  .use(logixlysia({
    config: {
      pino: logger,
      showStartupMessage: true,
      startupMessageFormat: "banner",
    },
  }));

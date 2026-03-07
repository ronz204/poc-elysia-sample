import { Elysia } from "elysia";
import { logixlysia } from "logixlysia";
import { logger } from "@services/pino.service";

export const LogixPlugin = new Elysia()
  .use(logixlysia({
    config: {
      pino: logger,
      showStartupMessage: true,
      startupMessageFormat: "banner",
    },
  }));

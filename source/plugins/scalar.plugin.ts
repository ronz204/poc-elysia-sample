import { Elysia } from "elysia";
import openapi from "@elysiajs/openapi";
import { AppConfig } from "@configs/app.config";

export const ScalarPlugin = new Elysia({ name: "scalar.plugin" })
  .use(openapi({
    path: AppConfig.APP_DOCS,
    documentation: {
      info: {
        title: AppConfig.APP_NAME,
        version: AppConfig.APP_VERSION,
      },
    },
  }));

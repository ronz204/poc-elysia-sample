import { Elysia, type ElysiaConfig } from "elysia";

const config: ElysiaConfig<"/health"> = {
  prefix: "/health", name: "health.plugin",
};

export const HealthPlugin = new Elysia(config)
  .get("/", () => Response.json({
    status: "healthy",
    service: "sample-api",
  }));

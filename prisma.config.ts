import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/",
  migrations: {
    path: "prisma/migrations",
    seed: "bun prisma/seeds/seeder.ts",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});

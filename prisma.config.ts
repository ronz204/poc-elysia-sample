import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/",
  migrations: {
    path: "prisma/Migrations",
    seed: "bun prisma/Seeders/Seed.ts",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});

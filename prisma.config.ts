import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/",
  migrations: {
    path: "prisma/Migrations",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});

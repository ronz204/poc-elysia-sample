import { Elysia } from "elysia";

import { PrismaLibSql } from "@prisma/adapter-libsql";
import { PrismaClient } from "@Prisma/client";

const adapter = new PrismaLibSql({ url: process.env.DATABASE_URL ?? "", });
const prisma = new PrismaClient({ adapter });

const app = new Elysia()
  .get("/", () => ({ ping: "pong" }))
  .get("/users", async () => {
    const users = await prisma.user.findMany();
    return { users };
  })
  .listen(3000);

const url = `http://${app.server?.hostname}:${app.server?.port}`;
console.log(`🦊 Elysia is running at ${url}`);

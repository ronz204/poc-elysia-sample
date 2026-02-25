import { PrismaLibSql } from "@prisma/adapter-libsql";
import { PrismaClient } from "@Prisma/client";
import { Elysia } from "elysia";

const url = process.env.DATABASE_URL ?? "";
const adapter = new PrismaLibSql({ url });

export const PrismaPlugin = new Elysia({ name: "prisma" })
  .decorate("prisma", new PrismaClient({ adapter }));

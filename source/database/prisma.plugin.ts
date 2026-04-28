import { Elysia } from "elysia";
import { PrismaLibSql } from "@prisma/adapter-libsql";
import { PrismaClient } from "@prisma/client";

const url = process.env.DATABASE_URL ?? "";
const adapter = new PrismaLibSql({ url });

export const PrismaPlugin = new Elysia({ name: "prisma.plugin" })
  .decorate("prisma", new PrismaClient({ adapter }));

import { Elysia } from "elysia";
import { PrismaClient } from "@prisma/client";
import { ORMConfig } from "@configs/orm.config";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const url = ORMConfig.DATABASE_URL;
const adapter = new PrismaLibSql({ url });

export const PrismaPlugin = new Elysia({ name: "prisma.plugin" })
  .decorate("prisma", new PrismaClient({ adapter }));

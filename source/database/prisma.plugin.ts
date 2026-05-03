import { env } from "@env";
import { Elysia } from "elysia";
import { PrismaClient } from "@prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";

import { UserDao } from "@dal/users/user.dao";
import { SessionDao } from "@dal/session/session.dao";

const url = env.DATABASE_URL;

export const PrismaPlugin = new Elysia({ name: "prisma.plugin" })
  .decorate(() => {
    const adapter = new PrismaLibSql({ url });
    const prisma = new PrismaClient({ adapter });
    
    return {
      userDao: new UserDao(prisma),
      sessionDao: new SessionDao(prisma),
    };
  });

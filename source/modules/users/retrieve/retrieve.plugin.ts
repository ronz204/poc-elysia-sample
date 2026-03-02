import { RetrieveUsersHandler } from "./retrieve.handler";
import { PrismaPlugin } from "@plugins/prisma.plugin";
import { RetrieveSchema } from "./retrieve.schema";
import { Elysia } from "elysia";

export const RetrievePlugin = new Elysia({ prefix: "/all" })
  .use(PrismaPlugin)
  
  .decorate(({ prisma }) => ({
    handler: new RetrieveUsersHandler(prisma)
  }))
  
  .get("/", async ({ handler, query, status }) => {
    const response = await handler.handle(query);
    return status(200, response);
  }, {
    query: RetrieveSchema.query,
    response: RetrieveSchema.response,
  });

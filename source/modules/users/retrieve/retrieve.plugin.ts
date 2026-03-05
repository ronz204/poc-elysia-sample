import { PrismaPlugin } from "@plugins/prisma.plugin";
import { RetrieveHandler } from "./retrieve.handler";
import { RetrieveSchema } from "./retrieve.schema";
import { Elysia } from "elysia";

export const RetrievePlugin = new Elysia()
  .use(PrismaPlugin)
  
  .decorate(({ prisma }) => ({
    retrieve: new RetrieveHandler(prisma)
  }))
  
  .get("/all", async ({ retrieve, query, status }) => {
    const response = await retrieve.handle(query);
    return status(200, response);
  }, {
    query: RetrieveSchema.query,
    response: RetrieveSchema.response,
  });

import { PrismaPlugin } from "@plugins/prisma.plugin";
import { RetrieveHandler } from "./retrieve.handler";
import { RetrieveSchema } from "./retrieve.schema";
import { Elysia } from "elysia";

export const RetrievePlugin = new Elysia()
  .use(PrismaPlugin)
  
  .decorate(({ prisma }) => ({
    retrieveH: new RetrieveHandler(prisma)
  }))
  
  .get("/all", async ({ retrieveH, query, status }) => {
    const response = await retrieveH.handle(query);
    return status(200, response);
  }, {
    query: RetrieveSchema.query,
    response: RetrieveSchema.response,
  });

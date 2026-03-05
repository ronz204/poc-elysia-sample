import { Elysia } from "elysia";
import { PrismaPlugin } from "@database/prisma.plugin";
import { RetrieveSchemas } from "../schemas/retrieve.schemas";
import { RetrieveHandler } from "../handlers/retrieve.handler";

export const RetrievePlugin = new Elysia()
  .use(PrismaPlugin)
  
  .decorate(({ prisma }) => ({
    retrieveH: new RetrieveHandler(prisma),
  }))
  
  .get("/all", async ({ query, status, retrieveH }) => {
    const response = await retrieveH.handle(query);
    return status(200, response);
  }, {
    query: RetrieveSchemas.query,
    response: RetrieveSchemas.response,
  });

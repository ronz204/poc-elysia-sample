import { Elysia } from "elysia";
import { PrismaPlugin } from "@database/prisma.plugin";
import { CreateSchemas } from "../schemas/create.schemas";
import { CreateHandler } from "../handlers/create.handler";

export const CreatePlugin = new Elysia()
  .use(PrismaPlugin)

  .decorate(({ prisma }) => ({
    createH: new CreateHandler(prisma),
  }))
  
  .post("/new", async ({ body, status, createH }) => {
    const response = await createH.handle(body);
    return status(201, response);
  }, {
    body: CreateSchemas.body,
    response: CreateSchemas.response,
  });

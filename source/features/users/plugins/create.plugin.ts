import { Elysia } from "elysia";
import { PrismaPlugin } from "@database/prisma.plugin";
import { CreateSchema } from "../schemas/create.schema";
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
    body: CreateSchema.body,
    response: CreateSchema.response,
  });

import { PrismaPlugin } from "@plugins/prisma.plugin";
import { CreateHandler } from "./create.handler";
import { CreateSchema } from "./create.schema";
import { Elysia } from "elysia";

export const CreatePlugin = new Elysia()
  .use(PrismaPlugin)
  
  .decorate(({ prisma }) => ({
    create: new CreateHandler(prisma)
  }))
  
  .post("/new", async ({ create, body, status }) => {
    const response = await create.handle(body);
    return status(201, response);
  }, {
    body: CreateSchema.body,
  });

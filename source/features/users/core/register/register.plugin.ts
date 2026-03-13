import { Elysia } from "elysia";
import { RegisterSchema } from "./register.schema";
import { RegisterHandler } from "./register.handler";
import { PrismaPlugin } from "@database/prisma.plugin";

export const RegisterPlugin = new Elysia({ name: "users.register" })
  .use(PrismaPlugin)
  
  .decorate(({ prisma }) => ({
    registerH: new RegisterHandler(prisma),
  }))
  
  .post("/new", async ({ body, status, registerH }) => {
    const response = await registerH.handle({ body });
    return status(201, response);
  }, {
    body: RegisterSchema.body,
    response: RegisterSchema.response,
  });

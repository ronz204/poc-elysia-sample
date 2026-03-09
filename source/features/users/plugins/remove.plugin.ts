import { Elysia } from "elysia";
import { PrismaPlugin } from "@database/prisma.plugin";
import { RemoveSchema } from "../schemas/remove.schema";
import { RemoveHandler } from "../handlers/remove.handler";

export const RemovePlugin = new Elysia({ name: "remove.users" })
  .use(PrismaPlugin)

  .decorate(({ prisma }) => ({
    removeH: new RemoveHandler(prisma),
  }))

  .delete("/", async ({ body, status, removeH }) => {
    const response = await removeH.handle(body);
    return status(200, response);
  }, {
    body: RemoveSchema.body,
    response: RemoveSchema.response,
  });

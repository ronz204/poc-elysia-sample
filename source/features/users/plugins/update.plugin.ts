import { Elysia } from "elysia";
import { PrismaPlugin } from "@database/prisma.plugin";
import { UpdateSchema } from "../schemas/udpate.schema";
import { UpdateHandler } from "../handlers/update.handler";

export const UpdatePlugin = new Elysia({ name: "update.users" })
  .use(PrismaPlugin)

  .decorate(({ prisma }) => ({
    updateH: new UpdateHandler(prisma),
  }))

  .put("/", async ({ body, status, updateH }) => {
    const response = await updateH.handle(body);
    return status(200, response);
  }, {
    body: UpdateSchema.body,
    response: UpdateSchema.response,
  });

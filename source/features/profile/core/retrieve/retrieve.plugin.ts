import { Elysia } from "elysia";
import { RetrieveSchema } from "./retrieve.schema";
import { RetrieveHandler } from "./retrieve.handler";
import { PrismaPlugin } from "@database/prisma.plugin";

export const RetrievePlugin = new Elysia({ name: "profile.me" })
  .use(PrismaPlugin)
  
  .decorate(({ prisma }) => ({
    retrieveH: new RetrieveHandler(prisma),
  }))
  
  .get("/me", async ({ status, retrieveH }) => {
    const response = await retrieveH.handle({ user: 1 });
    return status(200, response);
  }, {
    response: RetrieveSchema.response,
  });

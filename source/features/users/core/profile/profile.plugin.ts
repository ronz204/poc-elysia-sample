import { Elysia } from "elysia";
import { ProfileSchema } from "./profile.schema";
import { ProfileHandler } from "./profile.handler";
import { PrismaPlugin } from "@database/prisma.plugin";

export const ProfilePlugin = new Elysia({ name: "users.profile" })
  .use(PrismaPlugin)
  
  .decorate(({ prisma }) => ({
    profileH: new ProfileHandler(prisma),
  }))
  
  .get("/me", async ({ status, profileH }) => {
    const response = await profileH.handle({ user: 1 });
    return status(200, response);
  }, {
    response: ProfileSchema.response,
  });

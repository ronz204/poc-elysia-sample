import { Elysia } from "elysia";
import { UserService } from "./UserService";
import { PrismaPlugin } from "./PrismaPlugin";
import { ListUser200Response } from "./UserSchema";

export const UserPlugin = new Elysia({ prefix: "/users" })
  .use(PrismaPlugin)

  .derive(({ prisma }) => ({
    service: new UserService(prisma)
  }))

  .get("/list", async ({ service }) => {
    const users = await service.listUsers();
    return { users };
  }, {
    response: [
      ListUser200Response
    ],
  });

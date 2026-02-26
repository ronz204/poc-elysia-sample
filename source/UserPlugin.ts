import { Elysia } from "elysia";
import { UserService } from "./UserService";
import { PrismaPlugin } from "./PrismaPlugin";
import { RetrieveUsersSpec } from "./UserSpecs";
import { RetrieveUsersSchemas } from "./UserSchema";

export const UserPlugin = new Elysia({ prefix: "/users" })
  .use(PrismaPlugin)

  .derive(({ prisma }) => ({
    service: new UserService(prisma)
  }))

  .get("/all", async ({ service, query }) => {
    const spec = new RetrieveUsersSpec(query);
    const users = await service.retrieve(spec);
    return { users };
  }, {
    query: RetrieveUsersSchemas.query,
    response: RetrieveUsersSchemas.responses,
  });

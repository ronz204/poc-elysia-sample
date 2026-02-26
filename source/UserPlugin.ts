import { Elysia } from "elysia";
import { UserService } from "./UserService";
import { PrismaPlugin } from "./PrismaPlugin";
import { RetrieveSchema } from "./UserSchema";
import { RetrieveUsersSpec } from "./UserSpecs";

export const UserPlugin = new Elysia({ prefix: "/users" })
  .use(PrismaPlugin)

  .derive(({ prisma }) => ({
    service: new UserService(prisma)
  }))

  .get("/all", async ({ service, query, status }) => {
    const spec = new RetrieveUsersSpec(query);
    const users = await service.retrieve(spec);
    
    return status(200, { users });
  }, {
    query: RetrieveSchema.query,
    response: RetrieveSchema.responses,
  });

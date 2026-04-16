import type { IUserDao } from "./user.idao";
import { PrismaClient } from "@prisma/client";
import { Create } from "./queries/create.query";

export class UserDao implements IUserDao {
  constructor(private prisma: PrismaClient) {};

  public async create(args: Create.Args) {
    return await this.prisma.user.create(Create.query(args));
  };
};

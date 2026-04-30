import type { ISessionDao } from "./session.idao";
import { PrismaClient } from "@prisma/client";
import { Create } from "./queries/create.query";

export class SessionDao implements ISessionDao {
  constructor(private prisma: PrismaClient) {};

  public async create(args: Create.Args) {
    await this.prisma.session.create(Create.query(args));
  };
};

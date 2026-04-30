import type { ISessionDao } from "./session.idao";
import { PrismaClient } from "@prisma/client";
import { Create } from "./queries/create.query";
import { Revoke } from "./queries/revoke.query";

export class SessionDao implements ISessionDao {
  constructor(private prisma: PrismaClient) {};

  public async create(args: Create.Args) {
    await this.prisma.session.create(Create.query(args));
  };

  public async revoke(args: Revoke.Args) {
    await this.prisma.session.update(Revoke.query(args));
  };
};

import type { ISessionDao } from "./session.idao";
import { PrismaClient } from "@prisma/client";
import { Obtain } from "./queries/obtain.query";
import { Create } from "./queries/create.query";
import { Revoke } from "./queries/revoke.query";

export class SessionDao implements ISessionDao {
  constructor(private prisma: PrismaClient) {};

  public async create(args: Create.Args): Promise<void> {
    await this.prisma.session.create(Create.query(args));
  };

  public async revoke(args: Revoke.Args): Promise<void> {
    await this.prisma.session.update(Revoke.query(args));
  };

  public async obtain(args: Obtain.Args): Promise<Obtain.Result | null> {
    return await this.prisma.session.findUnique(Obtain.query(args));
  };
};

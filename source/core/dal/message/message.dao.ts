import type { IMessageDao } from "./message.idao";
import { PrismaClient } from "@prisma/client";
import { ReadAll } from "./queries/readall.query";

export class MessageDao implements IMessageDao {
  constructor(private prisma: PrismaClient) {};

  public async read(args: ReadAll.Args) {
    return await this.prisma.room.findFirst(ReadAll.query(args));
  };
};

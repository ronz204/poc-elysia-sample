import type { IRoomDao } from "./room.idao";
import { PrismaClient } from "@prisma/client";
import { Messages } from "./queries/messages.query";

export class RoomDao implements IRoomDao {
  constructor(private prisma: PrismaClient) {};

  public async messages(args: Messages.Args) {
    return await this.prisma.room.findFirst(Messages.query(args));
  };
};

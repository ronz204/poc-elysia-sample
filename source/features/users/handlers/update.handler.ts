import { UserErrors } from "../user.errors";
import { PrismaClient } from "@prisma/client";

import { ConflictError } from "@errors/conflict.error";
import { ExistsSpecify } from "../prisma/exists.specify";
import { UpdateSpecify } from "../prisma/update.specify";

import type { Handler } from "@contracts/handler.contract";
import type { UpdateCommand } from "../schemas/udpate.schema";
import type { UpdateResponse } from "../schemas/udpate.schema";

export class UpdateHandler implements Handler<UpdateCommand, UpdateResponse> {
  constructor(private readonly prisma: PrismaClient) {};

  public async handle(command: UpdateCommand): Promise<UpdateResponse> {
    const existsQuery = new ExistsSpecify(command).toQuery();
    
    const exists = await this.prisma.user.findFirst(existsQuery);
    if (!exists) throw new ConflictError(UserErrors.NOT_FOUND);

    const updateQuery = new UpdateSpecify(command).toQuery();
    return await this.prisma.user.update(updateQuery);
  };
};

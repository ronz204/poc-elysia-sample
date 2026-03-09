import { UserErrors } from "../user.errors";
import { PrismaClient } from "@prisma/client";

import { ConflictError } from "@errors/conflict.error";
import { ExistsSpecify } from "../prisma/exists.specify";
import { RemoveSpecify } from "../prisma/remove.specify";

import type { Handler } from "@contracts/handler.contract";
import type { RemoveCommand } from "../schemas/remove.schema";
import type { RemoveResponse } from "../schemas/remove.schema";

export class RemoveHandler implements Handler<RemoveCommand, RemoveResponse> {
  constructor(private readonly prisma: PrismaClient) {};

  public async handle(command: RemoveCommand): Promise<RemoveResponse> {
    const existsQuery = new ExistsSpecify(command).toQuery();

    const exists = await this.prisma.user.findFirst(existsQuery);
    if (!exists) throw new ConflictError(UserErrors.NOT_FOUND);

    const removeQuery = new RemoveSpecify(command).toQuery();
    await this.prisma.user.delete(removeQuery);
    
    return { success: true };
  };
};

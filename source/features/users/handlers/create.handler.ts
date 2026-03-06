import { PrismaClient } from "@prisma/client";
import { UserAlreadyExistsError } from "../user.errors";
import { ExistsSpecify } from "../prisma/exists.specify";
import { CreateSpecify } from "../prisma/create.specify";

import type { Handler } from "@contracts/handler.contract";
import type { CreateCommand } from "../schemas/create.schema";
import type { CreateResponse } from "../schemas/create.schema";

export class CreateHandler implements Handler<CreateCommand, CreateResponse> {
  constructor(private readonly prisma: PrismaClient) {};

  public async handle(command: CreateCommand): Promise<CreateResponse> {
    const existsQuery = new ExistsSpecify(command).toQuery();
    
    const exists = await this.prisma.user.findFirst(existsQuery);
    if (exists) throw new UserAlreadyExistsError("User with these credentials already exists");

    const createQuery = new CreateSpecify(command).toQuery();
    return await this.prisma.user.create(createQuery);
  };
};

import { PrismaClient } from "@prisma/client";
import { ExistsSpecify } from "../specifies/exists.specify";
import { CreateSpecify } from "../specifies/create.specify";

import type { Handler } from "@contracts/handler.contract";
import type { CreateCommand } from "../schemas/create.schemas";
import type { CreateResponse } from "../schemas/create.schemas";

export class CreateHandler implements Handler<CreateCommand, CreateResponse> {
  constructor(private readonly prisma: PrismaClient) {};

  public async handle(command: CreateCommand): Promise<CreateResponse> {
    const verifyQuery = new ExistsSpecify(command).toQuery();
    const exists = await this.prisma.user.findFirst(verifyQuery);

    const createQuery = new CreateSpecify(command).toQuery();
    return await this.prisma.user.create(createQuery);
  };
};

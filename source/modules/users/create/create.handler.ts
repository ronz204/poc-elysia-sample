import { PrismaClient } from "@prisma/client";
import { CreateSpecify } from "./create.specify";

import type { Handler } from "@contracts/handler.base";
import type { CreateCommand as Command } from "./create.schema";
import type { CreateResponse as Response } from "./create.schema";

export class CreateHandler implements Handler<Command, Response> {
  constructor(private prisma: PrismaClient) {};

  public async handle(input: Command): Promise<Response> {
    const query = new CreateSpecify(input).toQuery();
    return await this.prisma.user.create(query); 
  };
};

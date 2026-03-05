import { PrismaClient } from "@prisma/client";
import { CreateSpecify } from "./create.specify";
import { VerifySpecify } from "./verify.specify";

import { UserAlreadyExistsError } from "@plugins/errors.plugin";

import type { Handler } from "@contracts/handler.base";
import type { CreateCommand as Command } from "./create.schema";
import type { CreateResponse as Response } from "./create.schema";

export class CreateHandler implements Handler<Command, Response> {
  constructor(private prisma: PrismaClient) {};

  public async handle(input: Command): Promise<Response> {
    const verifyQuery = new VerifySpecify(input.email).toQuery();

    const existingUser = await this.prisma.user.findFirst(verifyQuery);
    if (existingUser) throw new UserAlreadyExistsError();

    const createQuery = new CreateSpecify(input).toQuery();
    return await this.prisma.user.create(createQuery);
  };
};

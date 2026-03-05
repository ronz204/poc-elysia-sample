import { PrismaClient } from "@prisma/client";
import { CreateSpecify } from "./create.specify";
import { VerifySpecify } from "./verify.specify";
import { SampleFirstError } from "@plugins/errors.plugin";

import type { Handler } from "@contracts/handler.base";
import type { CreateCommand as Command } from "./create.schema";
import type { CreateResponse as Response } from "./create.schema";

export class CreateHandler implements Handler<Command, Response> {
  constructor(private prisma: PrismaClient) {};

  public async handle(input: Command): Promise<Response> {
    const verifyQuery = new VerifySpecify(input.email).toQuery();
    const existingUser = await this.prisma.user.findFirst(verifyQuery);

    if (existingUser) throw new SampleFirstError("User with the provided email already exists");

    const query = new CreateSpecify(input).toQuery();
    return await this.prisma.user.create({
      data: {
        name: input.name,
        email: input.email,
        password: input.password,
      }
    });
  };
};

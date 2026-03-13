import { PrismaClient } from "@prisma/client";
import { RegisterSpecify } from "./register.specify";

import { ConflictError } from "@errors/conflict.error";
import { UserErrors } from "@features/users/users.error";
import { ExistsSpecify } from "@features/users/prisma/exists.specify";

import type { Handler } from "@contracts/handler.contract";
import type { RegisterRequest } from "./register.schema";
import type { RegisterResponse } from "./register.schema";

export class RegisterHandler implements Handler<RegisterRequest, RegisterResponse> {
  constructor(private readonly prisma: PrismaClient) {};

  public async handle(request: RegisterRequest): Promise<RegisterResponse> {
    const existsQuery = new ExistsSpecify(request.body).toQuery();

    const exists = await this.prisma.user.findFirst(existsQuery);
    if (exists) throw new ConflictError(UserErrors.ALREADY_EXISTS);

    const registerQuery = new RegisterSpecify(request).toQuery();
    return await this.prisma.user.create(registerQuery);
  };
};

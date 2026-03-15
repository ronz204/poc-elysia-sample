import { PrismaClient } from "@prisma/client";
import { RetrieveSpecify } from "./retrieve.specify";

import { ConflictError } from "@errors/conflict.error";
import { UserErrors } from "@features/users/users.error";

import type { Handler } from "@contracts/handler.contract";
import type { RetrieveRequest } from "./retrieve.schema";
import type { RetrieveResponse } from "./retrieve.schema";

export class RetrieveHandler implements Handler<RetrieveRequest, RetrieveResponse> {
  constructor(private readonly prisma: PrismaClient) {};

  public async handle(request: RetrieveRequest): Promise<RetrieveResponse> {
    const profileQuery = new RetrieveSpecify(request).toQuery();
    const profile = await this.prisma.user.findUnique(profileQuery);

    if (!profile) throw new ConflictError(UserErrors.NOT_FOUND);
    return profile;
  };
};

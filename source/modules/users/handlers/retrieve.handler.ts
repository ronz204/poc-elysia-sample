import { PrismaClient } from "@prisma/client";
import { RetrieveSpecify } from "../specifies/retrieve.specify";

import type { Handler } from "@contracts/handler.contract";
import type { RetrieveQuery } from "../schemas/retrieve.schemas";
import type { RetrieveResponse } from "../schemas/retrieve.schemas";

export class RetrieveHandler implements Handler<RetrieveQuery, RetrieveResponse> {
  constructor(private readonly prisma: PrismaClient) {};

  public async handle(query: RetrieveQuery): Promise<RetrieveResponse> {
    const retrieveQuery = new RetrieveSpecify(query).toQuery();
    return await this.prisma.user.findMany(retrieveQuery);
  };
};

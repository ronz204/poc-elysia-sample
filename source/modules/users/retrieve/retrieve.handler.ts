import { PrismaClient } from "@prisma/client";
import { RetrieveSpecify } from "./retrieve.specify";

import type { Handler } from "@contracts/handler.base";
import type { RetrieveQuery as Query } from "./retrieve.schema";
import type { RetrieveResponse as Response } from "./retrieve.schema";

export class RetrieveHandler implements Handler<Query, Response> {
  constructor(private prisma: PrismaClient) {};

  public async handle(input: Query): Promise<Response> {
    const query = new RetrieveSpecify(input).toQuery();
    const users = await this.prisma.user.findMany(query);
    
    return { users };
  };
};

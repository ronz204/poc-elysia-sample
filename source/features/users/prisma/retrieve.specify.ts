import { Specify } from "@contracts/specify.contract";
import type { UserFindManyArgs } from "@prisma/models";
import type { RetrieveQuery } from "../schemas/retrieve.schema";

export class RetrieveSpecify extends Specify {
  constructor(private readonly query: RetrieveQuery) {super()};

  public override toQuery() {
    const pagination = this.usePagination(this.query);

    return {
      skip: pagination.skip,
      take: pagination.take,
      select: {
        id: true,
        name: true,
        email: true,
      },
    } as const satisfies UserFindManyArgs;
  };
};

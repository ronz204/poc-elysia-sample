import { Specify } from "@database/specify.contract";
import type { UserFindManyArgs } from "@prisma/models";
import type { RetrieveQuery } from "../schemas/retrieve.schemas";

export class RetrieveSpecify extends Specify {
  constructor(private query: RetrieveQuery) {super()};

  public override toQuery() {
    return {
      select: {
        id: true,
        name: true,
        email: true,
      },
    } as const satisfies UserFindManyArgs;
  };
};

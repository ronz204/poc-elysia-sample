import { Specify } from "@specs/specify.base";
import type { UserFindManyArgs } from "@prisma/models";
import type { RetrieveQuery } from "./retrieve.schema";

type QueryArgs = Pick<UserFindManyArgs, "skip" | "take" | "select">;

export class RetrieveSpecify extends Specify<QueryArgs> {
  constructor(private query: RetrieveQuery) {super()};

  public override toQuery() {
    const { skip, take } = this.toPaginate(this.query);

    return {
      skip, take,
      select: {
        id: true,
        name: true,
        email: true,
      },
    } as const satisfies UserFindManyArgs;
  };
};

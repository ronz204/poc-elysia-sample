import { Specify } from "@contracts/specify.contract";
import type { UserFindUniqueArgs } from "@prisma/models";
import type { RetrieveRequest } from "./retrieve.schema";

export class RetrieveSpecify extends Specify {
  constructor(private args: RetrieveRequest) {super()};

  public override toQuery() {
    return {
      where: {
        id: this.args.user,
      },
      select: {
        id: true,
        name: true,
        posts: {
          select: {
            id: true,
            title: true,
            content: true,
          },
        },
      },
    } as const satisfies UserFindUniqueArgs;
  };
};

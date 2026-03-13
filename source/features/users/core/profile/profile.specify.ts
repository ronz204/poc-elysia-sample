import { Specify } from "@contracts/specify.contract";
import type { UserFindFirstArgs } from "@prisma/models";
import type { UserFindUniqueArgs } from "@prisma/models";
import type { ProfileRequest } from "./profile.schema";

export class ProfileSpecify extends Specify {
  constructor(private args: ProfileRequest) {super()};

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

import { Specification } from "@Specs/Specification";
import type { RetrieveUserQuery } from "./UserSchema";
import type { UserFindManyArgs } from "@Prisma/models";

export class RetrieveUsersSpec extends Specification {
  constructor(private query: RetrieveUserQuery) {super()};

  public override toQuery() {
    const { skip, take } = this.toPaginate(this.query);

    return {
      skip, take,
    } as const satisfies UserFindManyArgs;
  };
};

import { Specify } from "@specs/specify.base";
import type { UserFindFirstArgs } from "@prisma/models";

export class VerifySpecify extends Specify<UserFindFirstArgs> {
  constructor(private email: string) {super()};

  public override toQuery() {
    return {
      where: { email: this.email }
    } as const satisfies UserFindFirstArgs;
  };
};

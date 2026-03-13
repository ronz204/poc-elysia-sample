import { Specify } from "@contracts/specify.contract";
import type { UserFindFirstArgs } from "@prisma/models";

interface SpecifyArgs {
  id?: number;
  name?: string;
  email?: string;
};

export class ExistsSpecify extends Specify {
  constructor(private args: SpecifyArgs) {super()};

  public override toQuery() {
    return {
      where: {
        OR: [
          { id: this.args.id },
          { name: this.args.name },
          { email: this.args.email },
        ],
      },
    } as const satisfies UserFindFirstArgs;
  };
};

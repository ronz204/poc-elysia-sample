import { Specify } from "@contracts/specify.contract";
import type { UserFindFirstArgs } from "@prisma/models";

interface ExistsCommand {
  name?: string;
  email?: string;
};

export class ExistsSpecify extends Specify {
  constructor(private command: ExistsCommand) {super()};

  public override toQuery() {
    return {
      where: {
        OR: [
          { name: this.command.name },
          { email: this.command.email },
        ],
      },
    } as const satisfies UserFindFirstArgs;
  };
};

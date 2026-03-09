import { Specify } from "@contracts/specify.contract";
import type { UserDeleteArgs } from "@prisma/models";
import type { RemoveCommand } from "../schemas/remove.schema";

export class RemoveSpecify extends Specify {
  constructor(private readonly command: RemoveCommand) {super()};

  public override toQuery() {
    return {
      where: { id: this.command.id },
    } as const satisfies UserDeleteArgs;
  };
};

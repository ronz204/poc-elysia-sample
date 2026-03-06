import { Specify } from "@contracts/specify.contract";
import type { UserCreateArgs } from "@prisma/models";
import type { CreateCommand } from "../schemas/create.schema";

export class CreateSpecify extends Specify {
  constructor(private command: CreateCommand) {super()};

  public override toQuery() {
    return {
      data: {
        name: this.command.name,
        email: this.command.email,
        password: this.command.password,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    } as const satisfies UserCreateArgs;
  };
};

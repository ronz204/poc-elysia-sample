import { Specify } from "@contracts/specify.contract";
import type { UserCreateArgs } from "@prisma/models";
import type { RegisterCommand } from "./register.schema";

export class RegisterSpecify extends Specify {
  constructor(private command: RegisterCommand) {super()};

  public override toQuery() {
    return {
      data: {
        name: this.command.body.name,
        email: this.command.body.email,
        password: this.command.body.password,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    } as const satisfies UserCreateArgs;
  };
};

import { Specify } from "@contracts/specify.contract";
import type { UserCreateArgs } from "@prisma/models";
import type { RegisterRequest } from "./register.schema";

export class RegisterSpecify extends Specify {
  constructor(private args: RegisterRequest) {super()};

  public override toQuery() {
    return {
      data: {
        name: this.args.body.name,
        email: this.args.body.email,
        password: this.args.body.password,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    } as const satisfies UserCreateArgs;
  };
};

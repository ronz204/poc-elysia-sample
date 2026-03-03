import { Specify } from "@specs/specify.base";
import type { UserCreateArgs } from "@prisma/models";
import type { CreateCommand } from "./create.schema";

type QueryArgs = Pick<UserCreateArgs, "data" | "select">;

export class CreateSpecify extends Specify<QueryArgs> {
  constructor(private command: CreateCommand) {super()};

  public override toQuery() {
    return {
      select: {
        id: true,
        name: true,
        email: true,
      },
      data: {
        name: this.command.name,
        email: this.command.email,
        password: this.command.password,
      },
    } as const satisfies UserCreateArgs;
  };
};

import type { UserCreateArgs } from "@prisma/models";
import type { CreateCommand } from "../schemas/create.schemas";

export class CreateSpecify {
  constructor(private command: CreateCommand) {};

  public toQuery() {
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

import { Specify } from "@contracts/specify.contract";
import type { UserUpdateArgs } from "@prisma/models";
import type { UpdateCommand } from "../schemas/udpate.schema";

export class UpdateSpecify extends Specify {
  constructor(private readonly command: UpdateCommand) {super()};

  public override toQuery() {
    return {
      where: {
        id: this.command.id,
      },
      data: {
        name: this.command.name,
        email: this.command.email,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    } as const satisfies UserUpdateArgs;
  };
};

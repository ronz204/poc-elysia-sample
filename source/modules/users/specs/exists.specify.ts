import type { UserFindFirstArgs } from "@prisma/models";

interface ExistsCommand {
  name?: string;
  email?: string;
};

export class ExistsSpecify {
  constructor(private command: ExistsCommand) { };

  public toQuery() {
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

import type { UserUpdateArgs } from "@prisma/models";

export namespace Update {
  export interface Args {
    id: number;
    name?: string;
    email?: string;
    password?: string;
  };

  export function query(args: Args) {
    return {
      data: {
        name: args.name,
        email: args.email,
        password: args.password,
      },
      where: {
        id: args.id,
      },
    } satisfies UserUpdateArgs;
  };
};

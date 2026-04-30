import type { User } from "@prisma/client";

interface Args {
  user: User;
  refresh: string;
};

export abstract class AuthMapper {
  public static toResponse(args: Args) {
    return {
      userId: args.user.id,
      refresh: args.refresh,
    };
  };
};

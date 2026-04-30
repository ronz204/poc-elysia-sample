import type { User } from "@prisma/client";

interface MapperArgs {
  user: User;
  refresh: string;
};

export abstract class AuthMapper {
  public static toResponse(args: MapperArgs) {
    return {
      userId: args.user.id,
      refresh: args.refresh,
    };
  };
};

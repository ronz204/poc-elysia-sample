import type { User } from "@prisma/client";

interface MapperArgs {
  user: User;
  hash: string;
};

export abstract class AccessMapper {
  public static toResponse(args: MapperArgs) {
    return {
      userId: args.user.id,
      refreshToken: args.hash,
    };
  };
};

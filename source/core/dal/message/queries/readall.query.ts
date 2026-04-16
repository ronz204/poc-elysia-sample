import type { RoomFindFirstArgs } from "@prisma/models";
import type { RoomGetPayload } from "@prisma/models";

export namespace ReadAll {
  export interface Args {
    roomId: number;
    limit?: number;
    offset?: number;
  };

  export function query(args: Args) {
    return {
      where: {
        id: args.roomId,
      },
      include: {
        messages: {
          include: { sender: true },
          take: args.limit,
          skip: args.offset,
        },
      },
    } satisfies RoomFindFirstArgs;
  };

  export type Result = RoomGetPayload<ReturnType<typeof query>>;
};

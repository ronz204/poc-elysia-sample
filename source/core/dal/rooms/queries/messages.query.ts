import type { RoomFindFirstArgs } from "@prisma/models";
import type { RoomGetPayload } from "@prisma/models";

export namespace Messages {
  export interface Args {
    roomId: number;
  };

  export function query(args: Args) {
    return {
      where: {
        id: args.roomId,
      },
      include: {
        messages: {
          include: { sender: true },
        },
      },
    } satisfies RoomFindFirstArgs;
  };

  export type Result = RoomGetPayload<ReturnType<typeof query>>;
};

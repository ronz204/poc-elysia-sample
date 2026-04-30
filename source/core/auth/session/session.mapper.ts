import type { SessionInfo } from "./session.schema";

interface MapperArgs {
  ua: SessionInfo;
  userId: number;
};

export abstract class SessionMapper {
  public static toSession(args: MapperArgs) {
    return {
      ...args.ua,
      userId: args.userId,
      hash: crypto.randomUUID(),
      expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    };
  };
};

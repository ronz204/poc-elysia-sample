import type { AgentInfo } from "./session.schema";

interface MapperArgs {
  ua: AgentInfo;
  userId: number;
  expiresAt?: Date;
};

export abstract class SessionMapper {
  public static toSession(args: MapperArgs) {
    return {
      ...args.ua,
      userId: args.userId,
      hash: crypto.randomUUID(),
      expiresAt: args.expiresAt ?? new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    };
  };
};

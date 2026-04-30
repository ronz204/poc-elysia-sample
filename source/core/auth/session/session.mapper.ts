import type { UAInfo } from "./session.schema";
import { Create } from "@dal/session/queries/create.query";

interface MapperArgs {
  ua: UAInfo;
  userId: number;
};

export abstract class UAMapper {
  public static toSession(args: MapperArgs): Create.Args {
    return {
      ...args.ua,
      userId: args.userId,
      hash: crypto.randomUUID(),
      expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    };
  };
};

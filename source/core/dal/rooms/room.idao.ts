import { Messages } from "./queries/messages.query";

export interface IRoomDao {
  messages(args: Messages.Args): Promise<Messages.Result | null>;
};

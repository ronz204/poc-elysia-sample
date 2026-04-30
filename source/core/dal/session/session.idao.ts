import { Obtain } from "./queries/obtain.query";
import { Create } from "./queries/create.query";
import { Revoke } from "./queries/revoke.query";

export interface ISessionDao {
  create(args: Create.Args): Promise<void>;
  revoke(args: Revoke.Args): Promise<void>;
  obtain(args: Obtain.Args): Promise<Obtain.Result | null>;
};

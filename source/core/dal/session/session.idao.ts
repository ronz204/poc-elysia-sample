import { Create } from "./queries/create.query";

export interface ISessionDao {
  create(args: Create.Args): Promise<void>;
};

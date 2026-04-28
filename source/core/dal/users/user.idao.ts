import type { User } from "@prisma/client";
import { Create } from "./queries/create.query";
import { Obtain } from "./queries/obtain.query";

type UserNull = User | null;

export interface IUserDao {
  create(args: Create.Args): Promise<User>;
  obtain(args: Obtain.Args): Promise<UserNull>;
};

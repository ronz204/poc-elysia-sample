import type { User } from "@prisma/client";
import { Create } from "./queries/create.query";
import { Obtain } from "./queries/obtain.query";
import { Update } from "./queries/update.query";

type UserNull = User | null;

export interface IUserDao {
  create(args: Create.Args): Promise<User>;
  update(args: Update.Args): Promise<User>;
  obtain(args: Obtain.Args): Promise<UserNull>;
};

import type { IUserDao } from "@dal/users/user.idao";
import type { SignInUserRequest } from "./signin-user.schema";
import type { SignInUserPayload } from "./signin-user.schema";

type Request = SignInUserRequest;
type Payload = SignInUserPayload;

import {
  NotFoundError,
  ConflictError
} from "@errors/barrep.error";

export class SignInUserHandler {
  constructor(private dao: IUserDao) {};

  public async handle(req: Request): Promise<Payload> {
    const user = await this.dao.obtain(req.body);
    if (!user) throw new NotFoundError("User not found");

    const valid = await this.verify(req, user.password);
    if (!valid) throw new ConflictError("Invalid credentials");

    return { userId: user.id };
  };

  private async verify(req: Request, hash: string): Promise<boolean> {
    return await Bun.password.verify(hash, req.body.password);
  };
};

import type { IUserDao } from "@dal/users/user.idao";
import type { SignInUserRequest } from "./signin-user.schema";
import type { SignInUserPayload } from "./signin-user.schema";

type Request = SignInUserRequest;
type Payload = SignInUserPayload;

import { AuthMapper } from "@auth/auth.mapper";
import { NotFoundError, ConflictError } from "@errors/barrep.error";

export class SignInUserHandler {
  constructor(private dao: IUserDao) {};

  public async handle({ body }: Request): Promise<Payload> {
    const user = await this.dao.obtain(body);
    if (!user) throw new NotFoundError("User not found");

    const valid = await this.verify(body.password, user.password);
    if (!valid) throw new ConflictError("Invalid credentials");
    
    return AuthMapper.toResponse(user);
  };

  private async verify(psswd: string, hash: string): Promise<boolean> {
    return await Bun.password.verify(hash, psswd);
  };
};

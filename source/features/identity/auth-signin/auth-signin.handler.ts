import type { IUserDao } from "@dal/users/user.idao";
import type { ISessionDao } from "@dal/session/session.idao";
import type { AuthSignInRequest } from "./auth-signin.schema";
import type { AuthSignInPayload } from "./auth-signin.schema";

type Request = AuthSignInRequest;
type Response = AuthSignInPayload;

import { AuthMapper } from "@auth/access/auth.mapper";
import { SessionMapper } from "@auth/session/session.mapper";

export class AuthSignInHandler {
  constructor(
    private readonly userDao: IUserDao,
    private readonly sessionDao: ISessionDao) { };

  public async handle({ body, ua }: Request): Promise<Response> {
    const user = await this.userDao.obtain(body);
    if (!user) throw new Error("User not found");

    const isValid = await this.verify(body.password, user.password);
    if (!isValid) throw new Error("Invalid credentials");

    const session = SessionMapper.toSession({ ua, userId: user.id });
    await this.sessionDao.create(session);

    return AuthMapper.toResponse({ user, refresh: session.hash });
  };

  private async verify(psswd: string, hash: string) {
    return await Bun.password.verify(hash, psswd);
  };
};

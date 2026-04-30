import type { IUserDao } from "@dal/users/user.idao";
import type { ISessionDao } from "@dal/session/session.idao";
import type { AuthSignUpRequest } from "./auth-signup.schema";
import type { AuthSignUpPayload } from "./auth-signup.schema";

type Request = AuthSignUpRequest;
type Response = AuthSignUpPayload;

import { AccessMapper } from "@auth/access/access.mapper";
import { SessionMapper } from "@auth/session/session.mapper";

export class AuthSignUpHandler {
  constructor(
    private readonly userDao: IUserDao,
    private readonly sessionDao: ISessionDao) { };

  public async handle({ body, ua }: Request): Promise<Response> {
    const exists = await this.userDao.obtain(body);
    if (exists) throw new Error("User already exists");

    const hashed = await this.hash(body.password);
    const created = await this.userDao.create({ ...body, password: hashed });

    const session = SessionMapper.toSession({ ua, userId: created.id });
    await this.sessionDao.create(session);

    return AccessMapper.toResponse({ user: created, hash: session.hash });
  };

  private async hash(password: string) {
    return await Bun.password.hash(password);
  };
};

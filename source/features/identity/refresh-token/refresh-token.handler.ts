import type { ISessionDao } from "@dal/session/session.idao";
import type { RefreshTokenRequest } from "./refresh-token.schema";
import type { RefreshTokenPayload } from "./refresh-token.schema";

type Request = RefreshTokenRequest;
type Response = RefreshTokenPayload;

import { SessionMapper } from "@auth/session/session.mapper";

export class RefreshTokenHandler {
  constructor(private readonly sessionDao: ISessionDao) { };

  public async handle({ refresh, ua }: Request): Promise<Response> {
    const session = await this.sessionDao.obtain({ hash: refresh });
    if (!session) throw new Error("Session not found");

    if (session.revokedAt) throw new Error("Session has been revoked");
    if (session.expiresAt < new Date()) throw new Error("Session has expired");

    await this.sessionDao.revoke({ hash: refresh });

    const newSession = SessionMapper.toSession({
      ua, userId: session.userId, expiresAt: session.expiresAt });

    await this.sessionDao.create(newSession);
    return { userId: session.userId, refreshToken: newSession.hash };
  };
};

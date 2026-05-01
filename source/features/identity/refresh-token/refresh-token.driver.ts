import { Elysia } from "elysia";
import { PrismaPlugin } from "@database/prisma.plugin";
import { AccessPlugin } from "@auth/access/access.plugin";
import { SessionPlugin } from "@auth/session/session.plugin";

import { RefreshTokenHandler } from "./refresh-token.handler";
import { RefreshTokenResponse } from "./refresh-token.schema";

const name: string = "refresh-token.plugin";

export const RefreshTokenPlugin = new Elysia({ name })
  .use(AccessPlugin)
  .use(SessionPlugin)
  .use(PrismaPlugin)

  .derive(({ sessionDao }) => ({
    handler: new RefreshTokenHandler(sessionDao),
  }))

  .post("/refresh", async ({ status, jwt, ua, refresh, cooker, handler }) => {
    const response = await handler.handle({ refresh, ua });
    const token = await jwt.sign({ userId: response.userId });

    cooker(response.refreshToken);
    return status(200, { token, type: "Bearer" });
  }, {
    withAgent: true,
    withCookie: true,
    response: {
      200: RefreshTokenResponse,
    },
  });

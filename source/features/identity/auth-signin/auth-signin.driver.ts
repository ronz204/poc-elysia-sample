import { Elysia } from "elysia";
import { PrismaPlugin } from "@database/prisma.plugin";
import { AccessPlugin } from "@auth/access/access.plugin";
import { SessionPlugin } from "@auth/session/session.plugin";

import { AuthSignInBody } from "./auth-signin.schema";
import { AuthSignInHandler } from "./auth-signin.handler";
import { AuthSignInResponse } from "./auth-signin.schema";

const name: string = "auth-signin.plugin";

export const AuthSignInPlugin = new Elysia({ name })
  .use(AccessPlugin)
  .use(SessionPlugin)
  .use(PrismaPlugin)

  .derive(({ userDao, sessionDao }) => ({
    handler: new AuthSignInHandler(userDao, sessionDao),
  }))

  .post("/signin", async ({ status, body, jwt, ua, handler, cooker }) => {
    const response = await handler.handle({ body, ua });
    const token = await jwt.sign({ userId: response.userId });

    cooker(response.refreshToken);
    return status(200, { token, type: "Bearer" });
  }, {
    withUA: true,
    body: AuthSignInBody,
    response: {
      200: AuthSignInResponse,
    },
  });

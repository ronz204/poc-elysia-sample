import { Elysia } from "elysia";
import { AuthPlugin } from "@auth/access/auth.plugin";
import { CookiePlugin } from "@plugins/cookie.plugin";
import { PrismaPlugin } from "@database/prisma.plugin";
import { UAPlugin } from "@auth/session/session.plugin";

import { AuthSignInBody } from "./auth-signin.schema";
import { AuthSignInHandler } from "./auth-signin.handler";
import { AuthSignInResponse } from "./auth-signin.schema";

const name: string = "auth-signin.plugin";

export const AuthSignInPlugin = new Elysia({ name })
  .use(UAPlugin)
  .use(AuthPlugin)
  .use(PrismaPlugin)
  .use(CookiePlugin)

  .derive(({ userDao, sessionDao }) => ({
    handler: new AuthSignInHandler(userDao, sessionDao),
  }))

  .post("/signin", async ({ status, body, jwt, ua, handler, cooker }) => {
    const response = await handler.handle({ body, ua });
    const token = await jwt.sign({ userId: response.userId });

    cooker(response.refresh);
    return status(200, { token, type: "Bearer" });
  }, {
    withUA: true,
    body: AuthSignInBody,
    response: {
      200: AuthSignInResponse,
    },
  });

import { Elysia } from "elysia";
import { PrismaPlugin } from "@database/prisma.plugin";
import { AccessPlugin } from "@auth/access/access.plugin";
import { SessionPlugin } from "@auth/session/session.plugin";

import { AuthSignUpBody } from "./auth-signup.schema";
import { AuthSignUpHandler } from "./auth-signup.handler";
import { AuthSignUpResponse } from "./auth-signup.schema";

const name: string = "auth-signup.plugin";

export const AuthSignUpPlugin = new Elysia({ name })
  .use(AccessPlugin)
  .use(SessionPlugin)
  .use(PrismaPlugin)

  .derive(({ userDao, sessionDao }) => ({
    handler: new AuthSignUpHandler(userDao, sessionDao),
  }))

  .post("/signup", async ({ status, body, jwt, ua, handler, cooker }) => {
    const response = await handler.handle({ body, ua });
    const token = await jwt.sign({ userId: response.userId });

    cooker(response.refreshToken);
    return status(200, { token, type: "Bearer" });
  }, {
    withAgent: true,
    body: AuthSignUpBody,
    response: {
      200: AuthSignUpResponse,
    },
  });

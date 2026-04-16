import { Elysia } from "elysia";
import { AuthPlugin } from "@auth/auth.plugin";
import { RedisPlugin } from "@plugins/redis.plugin";
import { PrismaPlugin } from "@plugins/prisma.plugin";
import { MessageDao } from "@dal/message/message.dao";

import { GetMessagesQuery } from "./get-messages.schema";
import { GetMessagesParams } from "./get-messages.schema";
import { GetMessagesHandler } from "./get-messages.handler";
import { GetMessagesResponse } from "./get-messages.schema";

const name: string = "get-messages.plugin";

export const GetMessagesPlugin = new Elysia({ name })
  .use(AuthPlugin)
  .use(RedisPlugin)
  .use(PrismaPlugin)

  .derive(({ prisma, redis }) => {
    const dao = new MessageDao(prisma);
    const handler = new GetMessagesHandler(dao, redis);

    return { handler };
  })

  .get("/:roomId/messages", async ({ status, query, params, handler }) => {
    const response = await handler.handle({ query, params });
    return status(200, response);
  }, {
    isAuth: true,
    query: GetMessagesQuery,
    params: GetMessagesParams,
    response: {
      200: GetMessagesResponse,
    },
  });

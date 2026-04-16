import { t, type Static } from "elysia";

const MessageDto = t.Object({
  id: t.Number(),
  content: t.String(),
  senderId: t.Number(),
  senderName: t.String(),
  timestamp: t.String(),
});

export const GetMessagesQuery = t.Object({
  limit: t.Optional(t.Number({ minimum: 1, maximum: 100 })),
  offset: t.Optional(t.Number({ minimum: 0 })),
});

export const GetMessagesParams = t.Object({
  roomId: t.Number(),
});

export const GetMessagesRequest = t.Object({
  query: GetMessagesQuery,
  params: GetMessagesParams,
});

export const GetMessagesResponse = t.Object({
  messages: t.Array(MessageDto),
});

export type GetMessagesRequest = Static<typeof GetMessagesRequest>;
export type GetMessagesResponse = Static<typeof GetMessagesResponse>;

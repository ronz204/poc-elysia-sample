import type { GetMessagesResponse } from "./get-messages.schema";
import { ReadAll } from "@dal/message/queries/readall.query";

export class GetMessagesMapper {
  public static toResponse(data: ReadAll.Result): GetMessagesResponse {
    return {
      messages: data.messages.map((message) => ({
        id: message.id,
        content: message.content,
        senderId: message.sender.id,
        senderName: message.sender.name,
        timestamp: message.createdAt.toISOString(),
      })),
    };
  };
};

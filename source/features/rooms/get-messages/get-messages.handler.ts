import type { IMessageDao } from "@dal/message/message.idao";
import type { GetMessagesRequest } from "./get-messages.schema";
import type { GetMessagesResponse } from "./get-messages.schema";

type Request = GetMessagesRequest;
type Response = GetMessagesResponse;

import { NotFoundError } from "@errors/barrep.error";
import { GetMessagesMapper } from "./get-messages.mapper";

export class GetMessagesHandler {
  constructor(private dao: IMessageDao) {};

  public async handle(req: Request): Promise<Response> {
    const room = await this.dao.read({
      ...req.query, roomId: req.params.roomId});

    if (!room) throw new NotFoundError("Room not found");
    return GetMessagesMapper.toResponse(room);
  };
};

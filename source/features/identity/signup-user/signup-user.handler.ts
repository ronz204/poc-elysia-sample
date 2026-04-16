import type { IUserDao } from "@dal/users/user.idao";
import type { SignUpUserRequest } from "./signup-user.schema";
import type { SignUpUserPayload } from "./signup-user.schema";

type Request = SignUpUserRequest;
type Payload = SignUpUserPayload;

import { NotFoundError } from "@errors/barrep.error";

export class SignUpUserHandler {
  constructor(private dao: IUserDao) {};

  public async handle(req: Request): Promise<Payload> {
    const exists = await this.dao.obtain(req.body);
    if (exists) throw new NotFoundError("User already exists");

    const hashed = await this.hash(req);
    const created = await this.dao.create({
      ...req.body, password: hashed,});

    return { userId: created.id };
  };

  private async hash(req: Request): Promise<string> {
    return await Bun.password.hash(req.body.password);
  };
};

import { BaseError } from "@contracts/errors.contract";

export class UserAlreadyExistsError extends BaseError {
  constructor(message: string) {super(message, "USER_ALREADY_EXISTS", 409)};
};

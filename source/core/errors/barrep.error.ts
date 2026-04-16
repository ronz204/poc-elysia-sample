import { BaseError } from "./base.error";

export class ConflictError extends BaseError {
  constructor(message: string = "Resource already exists") {
    super(message, 409, "CONFLICT_ERROR");
  };
};

export class NotFoundError extends BaseError {
  constructor(message: string = "Resource not found") {
    super(message, 404, "NOT_FOUND_ERROR");
  };
};

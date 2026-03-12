import type { ErrorArgs } from "@contracts/Errors.contract";
import { BaseError } from "@contracts/Errors.contract";

export class ConflictError extends BaseError {
  constructor(args: ErrorArgs) {
    super(409, args);
  };
};

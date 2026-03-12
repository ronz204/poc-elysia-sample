import type { ErrorArgs } from "@contracts/errors.contract";
import { BaseError } from "@contracts/errors.contract";

export class ConflictError extends BaseError {
  constructor(args: ErrorArgs) {
    super(409, args);
  };
};

import { Elysia } from "elysia";
import { BaseError } from "@errors/base.error";
import { ValidationError } from "@errors/default.error";

import { 
  ConflictError,
  NotFoundError,
} from "@errors/barrep.error";

export const ErrorPlugin = new Elysia({ name: "error.plugin" })
  .error({
    ConflictError,
    NotFoundError,
  })
  
  .onError(({ error, code }) => {
    if (code === "VALIDATION") {
      return Response.json(ValidationError, { status: 400 });
    };

    if (error instanceof BaseError) {
      return error.toResponse();
    };
  });

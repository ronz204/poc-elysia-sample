import { Elysia } from "elysia";
import { BaseError } from "@errors/base.error";

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
      return Response.json({
        success: false,
        error: {
          code: "VALIDATION_ERROR",
          message: "Validation failed for the request",
        },
      }, { status: 400 });
    };

    if (error instanceof BaseError) {
      return error.toResponse();
    };
  });

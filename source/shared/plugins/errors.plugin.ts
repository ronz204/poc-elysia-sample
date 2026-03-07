import { Elysia } from "elysia";
import { BaseError } from "@contracts/errors.contract";
import { ConflictError } from "@errors/conflict.error";

export const ErrorsPlugin = new Elysia()
  .error({
    ConflictError,
  })
  
  .onError(({ error, set, code }) => {
    if (error instanceof BaseError) {
      return error.toResponse();
    };

    if (code === "VALIDATION") {
      set.status = 400;
      return Response.json({
        code: "VALIDATION_ERROR",
        message: "The request data is invalid.",
      });
    };

    set.status = 500;
    return Response.json({
      code: "INTERNAL_SERVER_ERROR",
      message: "An unexpected error occurred.",
    });
  });

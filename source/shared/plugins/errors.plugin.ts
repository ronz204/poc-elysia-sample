import { Elysia } from "elysia";
import { BaseError } from "@contracts/errors.contract";
import { UserAlreadyExistsError } from "@features/users/user.errors";

export const ErrorsPlugin = new Elysia()
  .error({
    UserAlreadyExistsError,
  })
  
  .onError(({ error }) => {
    if (error instanceof BaseError) {
      return error.toResponse();
    };
  });

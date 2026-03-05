import { Elysia } from "elysia";

export abstract class BaseError extends Error {
  abstract readonly code: string;
  abstract readonly status: number;

  constructor() {
    super();
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, new.target.prototype);
  };

  public toResponse(): Response {
    return Response.json({
      code: this.code,
      message: this.message,
    }, { status: this.status });
  };
};

export class UserAlreadyExistsError extends BaseError {
  readonly status = 400;
  readonly code = "USER_ALREADY_EXISTS";
  readonly message: string = "User with the provided email already exists";
};

export const ErrorsPlugin = new Elysia({ name: "errors" })
  .error({
    UserAlreadyExistsError,
  })
  .onError(({ error, code }) => {
    switch (code) {
      case "UserAlreadyExistsError":
        return error.toResponse();

      case "NOT_FOUND":
        return Response.json({ code: "NOT_FOUND", message: "Route not found" }, { status: 404 });

      case "VALIDATION":
        return Response.json({ code: "VALIDATION", message: error.message }, { status: 422 });

      case "INTERNAL_SERVER_ERROR":
        return Response.json({ code: "INTERNAL_SERVER_ERROR", message: "Internal server error" }, { status: 500 });
    };
  });

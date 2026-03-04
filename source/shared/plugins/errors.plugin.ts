import { Elysia } from "elysia";

export abstract class BaseError extends Error {
  abstract readonly code: string;
  abstract readonly status: number;

  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, new.target.prototype);
  };

  public toResponse(): Response {
    return Response.json({
      code: this.code,
      message: this.message
    }, { status: this.status });
  };
};

export class SampleFirstError extends BaseError {
  readonly code = "SAMPLE_FIRST_ERROR";
  readonly status = 400;
};

export class SampleSecondError extends BaseError {
  readonly code = "SAMPLE_SECOND_ERROR";
  readonly status = 500;
};

export const ErrorsPlugin = new Elysia({ name: "errors" })
  .error({
    SampleFirstError,
    SampleSecondError,
  })
  .onError(({ error, code }) => {
    switch (code) {
      case "SampleFirstError":
      case "SampleSecondError":
        return error.toResponse();

      case "NOT_FOUND":
        return Response.json({ code: "NOT_FOUND", message: "Route not found" }, { status: 404 });

      case "VALIDATION":
        return Response.json({ code: "VALIDATION", message: error.message }, { status: 422 });

      case "INTERNAL_SERVER_ERROR":
        return Response.json({ code: "INTERNAL_SERVER_ERROR", message: "Internal server error" }, { status: 500 });
    };
  });

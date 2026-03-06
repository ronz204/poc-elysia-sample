export abstract class BaseError extends Error {
  public readonly code: string;
  public readonly status: number;

  constructor(message: string, code: string, status: number) {
    super(message);
    this.code = code;
    this.status = status;
  };

  public toResponse(): Response {
    return Response.json({
      code: this.code,
      message: this.message,
    }, { status: this.status });
  };
};

import type { ErrorResponse } from "./base.error";

export const ValidationError: ErrorResponse = {
  success: false,
  error: {
    code: "VALIDATION_ERROR",
    message: "Validation failed for the request",
  },
};
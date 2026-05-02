import { Elysia } from "elysia";
import { jwt } from "@elysiajs/jwt";
import { AuthConfig } from "@configs/auth.config";
import { AccessHeaders, AccessResponse, AccessSchema } from "./access.schema";

export const AccessPlugin = new Elysia({ name: "access.plugin" })
  .use(jwt({
    name: "jwt",
    schema: AccessSchema,
    secret: AuthConfig.SECRET,
    exp: AuthConfig.ACCESS_TTL,
  }))

  .macro({
    withAccess: {
      headers: AccessHeaders,
      response: AccessResponse,
      resolve: async ({ status, headers, jwt }) => {
        const status401 = status(401, {
          error: "Unauthorized",
          message: "Not authorized to access this resource."
        });

        const header = headers["authorization"];
        if (!header?.startsWith("Bearer ")) return status401;

        const payload = await jwt.verify(header.slice(7));
        if (!payload) return status401;

        return { userId: payload.userId };
      },
    },
  });

import { env } from "@env";
import { Elysia, t } from "elysia";
import { UAParser } from "ua-parser-js";
import { CookieSchema } from "./session.schema";
import { AccessResponse } from "@auth/access/access.schema";

export const SessionPlugin = new Elysia({ name: "session.plugin" })
  .derive({ as: "scoped" }, ({ cookie: { refresh } }) => ({
    cooker: (value: string) => {
      refresh?.set({
        value,
        httpOnly: true,
        sameSite: "strict",
        maxAge: env.REFRESH_TTL,
      });
    },
  }))

  .macro({
    withCookie: {
      cookie: CookieSchema,
      response: AccessResponse,
      resolve: ({ status, cookie: { refresh } }) => {
        const value = refresh?.value;
        if (typeof value !== "string" || !value) return status(401, {
          error: "Unauthorized",
          message: "No refresh token provided.",
        });

        return { refresh: value };
      },
    },

    withAgent: {
      resolve: ({ request, server }) => {
        const agent = request.headers.get("user-agent") ?? "";
        const address = server?.requestIP(request)?.address ?? "";

        const { device, os } = new UAParser(agent).getResult();
        const parsed = [device.vendor, device.model]
          .filter(Boolean).join(" ") || os.name || "unknown";

        return { ua: { address, agent, device: parsed } };
      },
    },
  });

import { Elysia } from "elysia";
import { UAParser } from "ua-parser-js";
import { AuthConfig } from "@configs/auth.config";

export const SessionPlugin = new Elysia({ name: "session.plugin" })
  .derive({ as: "scoped" }, ({ cookie: { refresh } }) => ({
    cooker: (value: string) => {
      refresh?.set({
        value,
        httpOnly: true,
        sameSite: "strict",
        maxAge: AuthConfig.REFRESH_TTL,
      });
    },
  }))

  .macro({
    withUA: {
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

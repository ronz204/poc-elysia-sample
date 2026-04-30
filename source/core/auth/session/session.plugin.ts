import { Elysia } from "elysia";
import { UAParser } from "ua-parser-js";

export const UAPlugin = new Elysia({ name: "ua.plugin" })
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


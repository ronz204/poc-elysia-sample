import { Elysia } from "elysia";
import { SandboxResponse } from "./sandbox.schema";
import { AccessPlugin } from "@auth/access/access.plugin";

export const SandboxPlugin = new Elysia({ name: "sandbox.plugin" })
  .use(AccessPlugin)

  .get("/sandbox", async ({ status, userId }) => {
    console.log(`Sandbox accessed by user with ID: ${userId}`);
    return status(200, { message: "Sandbox accessed successfully!" });
  }, {
    withAccess: true,
    response: {
      200: SandboxResponse,
    },
  });

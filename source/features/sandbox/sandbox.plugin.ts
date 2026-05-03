import { Elysia } from "elysia";
import { AccessPlugin } from "@auth/access/access.plugin";
import { SandboxResponse, SocketMessage } from "./sandbox.schema";

export const SandboxPlugin = new Elysia({ name: "sandbox.plugin" })
  .use(AccessPlugin)

  .ws("/socket", {
    body: SocketMessage,
    withWsAccess: true,

    open: async (ws) => {
      console.log(`WebSocket connection established: ${ws.id}`);
    },

    message: async (ws, { event }) => {
      
    },

    close: async (ws) => {
      console.log(`WebSocket connection closed: ${ws.id}`);
    },
  })

  .get("/sandbox", async ({ status, userId }) => {
    console.log(`Sandbox accessed by user with ID: ${userId}`);
    return status(200, { message: "Sandbox accessed successfully!" });
  }, {
    withAccess: true,
    response: {
      200: SandboxResponse,
    },
  });

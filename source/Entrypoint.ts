import { Elysia } from "elysia";
import { UserPlugin } from "./UserPlugin";

const app = new Elysia()
  .use(UserPlugin)
  .listen(3000);

const url = `http://${app.server?.hostname}:${app.server?.port}`;
console.log(`🦊 Elysia is running at ${url}`);

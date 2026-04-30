import { Elysia } from "elysia";
import { AuthSignInPlugin } from "./auth-signin/auth-signin.driver";

const prefix: string = "/auth";
const name: string = "auth.plugin";

export const IdentityPlugin = new Elysia({ name, prefix })
  .use(AuthSignInPlugin);

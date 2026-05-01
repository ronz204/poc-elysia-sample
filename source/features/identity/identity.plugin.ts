import { Elysia } from "elysia";
import { AuthSignInPlugin } from "./auth-signin/auth-signin.driver";
import { AuthSignUpPlugin } from "./auth-signup/auth-signup.driver";
import { RefreshTokenPlugin } from "./refresh-token/refresh-token.driver";

const prefix: string = "/auth";
const name: string = "auth.plugin";

export const IdentityPlugin = new Elysia({ name, prefix })
  .use(AuthSignInPlugin)
  .use(AuthSignUpPlugin)
  .use(RefreshTokenPlugin);

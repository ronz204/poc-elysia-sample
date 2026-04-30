import { Elysia } from "elysia";

const REFRESH_TTL = 7 * 24 * 60 * 60;

export const CookiePlugin = new Elysia({ name: "cookie.plugin" })
  .derive({ as: "scoped" }, ({ cookie: { refresh } }) => ({
    cooker: (value: string) => {
      refresh?.set({
        value,
        httpOnly: true,
        sameSite: "strict",
        maxAge: REFRESH_TTL,
      });
    },
  }));

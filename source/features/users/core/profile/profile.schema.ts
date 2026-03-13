import { t, type Static } from "elysia";

const ProfileRequest = t.Object({
  user: t.Number(),
});

const ProfileResponse = t.Object({
  id: t.Number(),
  name: t.String(),
  posts: t.Array(t.Object({
    id: t.Number(),
    title: t.String(),
    content: t.String(),
  })),
});

export const ProfileSchema = {
  request: ProfileRequest,
  response: {
    200: ProfileResponse,
  },
} as const;

export type ProfileRequest = Static<typeof ProfileRequest>;
export type ProfileResponse = Static<typeof ProfileResponse>;

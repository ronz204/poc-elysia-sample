import { PrismaClient } from "@prisma/client";
import { ProfileSpecify } from "./profile.specify";

import { ConflictError } from "@errors/conflict.error";
import { UserErrors } from "@features/users/users.error";

import type { Handler } from "@contracts/handler.contract";
import type { ProfileRequest } from "./profile.schema";
import type { ProfileResponse } from "./profile.schema";

export class ProfileHandler implements Handler<ProfileRequest, ProfileResponse> {
  constructor(private readonly prisma: PrismaClient) {};

  public async handle(request: ProfileRequest): Promise<ProfileResponse> {
    const profileQuery = new ProfileSpecify(request).toQuery();
    const profile = await this.prisma.user.findUnique(profileQuery);

    if (!profile) throw new ConflictError(UserErrors.NOT_FOUND);
    return profile;
  };
};

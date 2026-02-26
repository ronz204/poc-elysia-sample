import type { User } from "@Prisma/client";
import { PrismaClient } from "@Prisma/client";
import { Specification } from "@Specs/Specification";

export class UserService {
  constructor(private prisma: PrismaClient) {};

  public async retrieve(spec: Specification): Promise<User[]> {
    return this.prisma.user.findMany(spec.toQuery());
  };
};

import { PrismaClient } from "@Prisma/client";
import type { User } from "@Prisma/client";

export class UserService {
  constructor(private prisma: PrismaClient) {};

  public async listUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  };
};

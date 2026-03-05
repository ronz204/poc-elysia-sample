import type { UserFindManyArgs } from "@prisma/models";
import type { RetrieveQuery } from "../schemas/retrieve.schemas";

export class RetrieveSpecify {
  constructor(private query: RetrieveQuery) {};

  public toQuery() {
    return {
      select: {
        id: true,
        name: true,
        email: true,
      },
    } as const satisfies UserFindManyArgs;
  };
};

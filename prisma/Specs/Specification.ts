export abstract class Specification {
  private DEFAULT_PAGE = 1;
  private DEFAULT_LIMIT = 10;

  abstract toQuery(): any;

  protected toPaginate(query: any) {
    const page = query.page ?? this.DEFAULT_PAGE;
    const limit = query.limit ?? this.DEFAULT_LIMIT;

    const skip = (page - 1) * limit;
    const take = limit;

    return { skip, take };
  };
};

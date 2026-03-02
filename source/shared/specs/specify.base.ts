export abstract class Specify<Query> {
  private DEFAULT_PAGE = 1;
  private DEFAULT_LIMIT = 10;

  abstract toQuery(): Query;

  protected toPaginate(query: Paginated) {
    const page = query.page ?? this.DEFAULT_PAGE;
    const limit = query.limit ?? this.DEFAULT_LIMIT;

    const skip = (page - 1) * limit;
    const take = limit;

    return { skip, take };
  };
};

interface Paginated {
  page?: number;
  limit?: number;
};

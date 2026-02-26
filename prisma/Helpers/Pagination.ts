export class Pagination {
  private static DEFAULT_PAGE = 1;
  private static DEFAULT_LIMIT = 10;

  public static apply(
    page: number = this.DEFAULT_PAGE,
    limit: number = this.DEFAULT_LIMIT) {
    
    const skip = (page - 1) * limit;
    const take = limit;
    
    return { skip, take };
  };
};

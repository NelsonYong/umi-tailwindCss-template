declare namespace API {
  export type Basis<T = any> = {
    code: number;
    data: T;
    msg?: string;
  };
  export type Pagination = {
    currPage?: number;
    pageSize?: number;
  };
}

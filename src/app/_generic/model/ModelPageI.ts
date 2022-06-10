
export interface ModelPageI<Model> {
  content : Array<Model>
  pageable: {
    sort: {
      empty: boolean
      sorted: boolean
      unsorted: boolean
    },
    offset: Number
    pageNumber: Number
    pageSize: Number
    unpaged: boolean
    paged: boolean
  },
  last: boolean,
  totalPages: Number
  totalElements: Number
  size: Number
  number: Number
  sort: {
    empty: boolean,
    sorted: boolean,
    unsorted: boolean
  },
  first: boolean,
  numberOfElements: Number
  empty: boolean
}

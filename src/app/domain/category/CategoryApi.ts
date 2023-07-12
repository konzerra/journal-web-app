import {AppApi} from "../AppApi";

export const CategoryApi =  {
  save: `${AppApi.protectedApi}/category`,
  deleteById: `${AppApi.protectedApi}/category/{id}`,
  update: `${AppApi.protectedApi}/category`,

  getByIdFull: `${AppApi.protectedApi}/category/full/{id}`,
  getById: `${AppApi.publicApi}/category/{id}`,
  getPaginated: `${AppApi.protectedApi}/category/paginated`,
  getAll:`${AppApi.publicApi}/category/all`

}

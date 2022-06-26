import {AppApi} from "../../AppApi";

export class CategoryApi {
  public static paths={
    save: `${AppApi.server.protectedApi}/category`,
    deleteById: `${AppApi.server.protectedApi}/category/{id}`,
    update: `${AppApi.server.protectedApi}/category`,

    getByIdFull: `${AppApi.server.protectedApi}/category/full/{id}`,
    getById: `${AppApi.server.publicApi}/category/`,
    getAllPaginated: `${AppApi.server.protectedApi}/category/all/{pageNumber}`,
    getAll:`${AppApi.server.protectedApi}/category/all`
  }
}

import {AppApi} from "../../AppApi";

export class CategoryApi {
  public static paths={
    save: `${AppApi.server.protectedApi}/category`,
    deleteById: `${AppApi.server.publicApi}/category/`,
    update: `${AppApi.server.protectedApi}/category`,

    getById: `${AppApi.server.publicApi}/category/`,
    getAll: `${AppApi.server.publicApi}/category/`,
  }
}

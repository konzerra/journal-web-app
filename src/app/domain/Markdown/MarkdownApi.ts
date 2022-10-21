import {AppApi} from "../AppApi";

export class MarkdownApi {
  public static paths={
    save: `${AppApi.server.protectedApi}/markdown`,
    deleteById: `${AppApi.server.protectedApi}/markdown/{id}`,
    update: `${AppApi.server.protectedApi}/markdown`,

    getAllNames: `${AppApi.server.publicApi}/markdown/all-names`,
    getByIdFull: `${AppApi.server.protectedApi}/markdown/full/{id}`,
    getById: `${AppApi.server.publicApi}/markdown/{id}`,
    getAllPaginated: `${AppApi.server.protectedApi}/markdown/all/{pageNumber}/{pageSize}`,

  }
}

import {AppApi} from "../../AppApi";

export class JournalApi {
  public static paths={
    save: `${AppApi.server.protectedApi}/journal`,
    deleteById: `${AppApi.server.publicApi}/journal/`,
    update: `${AppApi.server.protectedApi}/journal`,

    getById: `${AppApi.server.publicApi}/journal/`,
    getAll: `${AppApi.server.publicApi}/journal/`,
    getAllPaginated: `${AppApi.server.publicApi}/journal/all/`,
  }
}

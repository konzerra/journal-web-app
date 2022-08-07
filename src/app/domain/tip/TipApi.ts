import {AppApi} from "../AppApi";

export class TipApi {
  public static paths={
    save: `${AppApi.server.protectedApi}/tip`,
    deleteById: `${AppApi.server.protectedApi}/tip/{id}`,
    update: `${AppApi.server.protectedApi}/tip`,

    getByIdFull: `${AppApi.server.protectedApi}/tip/full/{id}`,
    getAll:`${AppApi.server.publicApi}/tip/all`,
    getAllPaginated: `${AppApi.server.protectedApi}/tip/all/{pageNumber}/{pageSize}`,
  }
}

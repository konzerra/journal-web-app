import {AppApi} from "../../../domain/AppApi";

export const TipApi = {

  save: `${AppApi.protectedApi}/tip`,
  deleteById: `${AppApi.protectedApi}/tip/{id}`,
  update: `${AppApi.protectedApi}/tip`,

  getByIdFull: `${AppApi.protectedApi}/tip/full/{id}`,
  getAll:`${AppApi.publicApi}/tip/all`,
  getPaginated: `${AppApi.publicApi}/tip/paginated`,
}

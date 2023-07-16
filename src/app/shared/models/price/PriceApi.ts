import {AppApi} from "../../../domain/AppApi";

export const PriceApi = {
  save: `${AppApi.protectedApi}/price`,
  deleteById: `${AppApi.protectedApi}/price/{id}`,
  update: `${AppApi.protectedApi}/price`,

  getByIdFull: `${AppApi.protectedApi}/price/full/{id}`,
  getAll:`${AppApi.publicApi}/price/all`,
  getPaginated: `${AppApi.protectedApi}/price/paginated`,
}

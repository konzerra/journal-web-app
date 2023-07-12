import {AppApi} from "../../../domain/AppApi";

export const MarkdownApi = {

  save: `${AppApi.protectedApi}/markdown`,
  deleteById: `${AppApi.protectedApi}/markdown/{id}`,
  update: `${AppApi.protectedApi}/markdown`,


  getAllNames: `${AppApi.publicApi}/markdown/all_names`,
  getByIdFull: `${AppApi.protectedApi}/markdown/full/{id}`,
  getById: `${AppApi.publicApi}/markdown/{id}`,
  getPaginated: `${AppApi.protectedApi}/markdown/paginated`,

}

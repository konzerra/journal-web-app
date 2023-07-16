import {AppApi} from "../../../domain/AppApi";

const publicPath = `${AppApi.publicApi}/journal`
const protectedPath = `${AppApi.protectedApi}/journal`

export const AdminJournalApi =  {
  makeReport : `${protectedPath}/report/{id}`,
  getAllByStatus: `${publicPath}/all-by-status/{status}`,
  getAllPublishedArticlesPaginated : `${publicPath}/published/{id}/articles/{pageNumber}/{pageSize}`,
  getPaginatedJournalArticles : `${publicPath}/{id}/articles`,
  getAllCategories : `${publicPath}/{id}/categories`,
  getByIdFull : `${protectedPath}/full/{id}`,
  getById: `${publicPath}/{id}`,
  getPaginated: `${publicPath}/paginated`,
  getPaginatedByStatus: `${publicPath}/paginated/by_status/{status}`,
  save: `${protectedPath}`,
  deleteById: `${protectedPath}/{id}`,
  update: `${protectedPath}`,
}

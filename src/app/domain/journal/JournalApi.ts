import {AppApi} from "../AppApi";

const publicPath = `${AppApi.publicApi}/journal`
const protectedPath = `${AppApi.protectedApi}/journal`

export const JournalApi =  {
  makeReport : `${protectedPath}/{id}/report`,
  getAllByStatus: `${protectedPath}/all/by_status/{status}`,
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

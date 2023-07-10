import {AppApi} from "../../../domain/AppApi";

const publicPath = `${AppApi.server.publicApi}/journal`
const protectedPath = `${AppApi.server.protectedApi}/journal`
export const AdminJournalApi =  {
  makeReport : `${this.protectedPath}/report/{id}`,
  getAllByStatus: `${this.publicPath}/all-by-status/{status}`,
  getAllPublishedArticlesPaginated : `${this.publicPath}/published/{id}/articles/{pageNumber}/{pageSize}`,
  getPaginatedJournalArticles : `${this.publicPath}/{id}/articles`,
  getAllCategories : `${this.publicPath}/{id}/categories`,
  getByIdFull : `${this.protectedPath}/full/{id}`,
  getById: `${this.publicPath}/{id}`,
  getPaginated: `${this.publicPath}/all/{pageNumber}/{pageSize}`,
  getPaginatedByStatus: `${this.publicPath}/paginated/by_status/{status}`,
  save: `${this.protectedPath}`,
  deleteById: `${this.protectedPath}/{id}`,
  update: `${this.protectedPath}`,
}


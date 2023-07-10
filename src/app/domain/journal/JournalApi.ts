import {AppApi} from "../AppApi";

export class JournalApi {
  private static publicPath = `${AppApi.server.publicApi}/journal`
  private static protectedPath = `${AppApi.server.protectedApi}/journal`



  public static paths={

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

}

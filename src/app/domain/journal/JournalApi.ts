import {AppApi} from "../AppApi";

export class JournalApi {
  private static publicPath = `${AppApi.server.publicApi}/journal`
  private static protectedPath = `${AppApi.server.protectedApi}/journal`



  public static paths={

    makeReport : `${this.protectedPath}/{id}`,

    getAllByStatus: `${this.protectedPath}/all-by-status/{status}`,
    getAllArticlesPaginated : `${this.publicPath}/{id}/articles/{pageNumber}/{pageSize}`,
    getAllCategories : `${this.publicPath}/{id}/categories`,
    getByIdFull : `${this.protectedPath}/full/{id}`,
    getById: `${this.publicPath}/{id}`,
    getAllPaginated: `${this.publicPath}/all/{pageNumber}/{pageSize}`,
    getAllPaginatedByStatus: `${this.publicPath}/all-by-status/{status}/{pageNumber}/{pageSize}`,

    save: `${this.protectedPath}`,
    deleteById: `${this.protectedPath}/{id}`,
    update: `${this.protectedPath}`,






  }

}

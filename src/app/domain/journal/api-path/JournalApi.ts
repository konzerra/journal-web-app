import {AppApi} from "../../AppApi";

export class JournalApi {
  private static publicPath = `${AppApi.server.publicApi}/journal`
  private static protectedPath = `${AppApi.server.protectedApi}/journal`



  public static paths={

    makeReport : `${this.protectedPath}/{id}`,

    getAllArticlesPaginated : `${this.publicPath}/{id}/articles/{pageNumber}`,
    getAllCategories : `${this.publicPath}/{id}/categories`,
    getByIdFull : `${this.protectedPath}/full/{id}`,
    getById: `${this.publicPath}/{id}`,
    getAllPaginated: `${this.publicPath}/all/{pageNumber}`,

    save: `${this.protectedPath}`,
    deleteById: `${this.protectedPath}/{id}`,
    update: `${this.protectedPath}`,






  }

}

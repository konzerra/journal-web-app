import {AppApi} from "../../../domain/AppApi";

export class ArticleApi {
  public static paths={
    save: `${AppApi.server.protectedApi}/article`,
    deleteById: `${AppApi.server.protectedApi}/article/{id}`,
    updateByAdmin: `${AppApi.server.protectedApi}/article/admin`,
    updateByReviewer: `${AppApi.server.protectedApi}/article/reviewer`,

    getByIdFull: `${AppApi.server.protectedApi}/article/full/{id}`,
    getMyArticles: `${AppApi.server.protectedApi}/article/my/{id}`,
    getAllPaginated: `${AppApi.server.publicApi}/article/all/{pageNumber}/{pageSize}`,

    search: `${AppApi.server.publicApi}/article/search/{pageNumber}`,
  }
}

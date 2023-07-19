import {AppApi} from "../AppApi";

export const ArticleApi =  {

  save: `${AppApi.protectedApi}/article`,
  deleteById: `${AppApi.protectedApi}/article/{id}`,
  updateByAdmin: `${AppApi.protectedApi}/article/admin`,
  updateByReviewer: `${AppApi.protectedApi}/article/reviewer`,

  getByIdFull: `${AppApi.protectedApi}/article/full/{id}`,
  getMyArticles: `${AppApi.protectedApi}/article/my/{id}`,
  getAllPaginated: `${AppApi.publicApi}/article/all/{pageNumber}/{pageSize}`,

  search: `${AppApi.publicApi}/article/search/{pageNumber}`,

}

import {AppApi} from "../AppApi";

export const ReviewerApi = {

  save: `${AppApi.protectedApi}/reviewer`,
  deleteById: `${AppApi.protectedApi}/reviewer/{id}`,
  update: `${AppApi.protectedApi}/reviewer`,

  distribute:`${AppApi.protectedApi}/reviewer/distribute/journal/{id}`,

  getById:`${AppApi.protectedApi}/reviewer/{id}`,
  getQueue: `${AppApi.protectedApi}/reviewer/category/{id}`,
  getAllArticles: `${AppApi.protectedApi}/reviewer/{id}/articles`,
  getPaginated: `${AppApi.protectedApi}/reviewer/all/{pageNumber}/{pageSize}`,

}

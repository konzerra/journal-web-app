import {AppApi} from "../AppApi";

export class ReviewerApi {
  public static paths={
    save: `${AppApi.server.protectedApi}/reviewer`,
    deleteById: `${AppApi.server.protectedApi}/reviewer/{id}`,
    update: `${AppApi.server.protectedApi}/reviewer`,

    distribute:`${AppApi.server.protectedApi}/reviewer/distribute/journal/{id}`,

    getById:`${AppApi.server.protectedApi}/reviewer/{id}`,
    getQueue: `${AppApi.server.protectedApi}/reviewer/category/{id}`,
    getAllArticles: `${AppApi.server.protectedApi}/reviewer/{id}/articles`,
    getPaginated: `${AppApi.server.protectedApi}/reviewer/all/{pageNumber}/{pageSize}`,
  }
}

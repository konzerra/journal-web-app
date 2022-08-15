import {AppApi} from "../AppApi";

export class ImageApi {
  private static publicPath = `${AppApi.server.publicApi}/image`
  private static protectedPath = `${AppApi.server.protectedApi}/image`



  public static paths={

    getById: `${this.publicPath}/{id}`,

  }
}

import {AppApi} from "../AppApi";

export class DocApi {
  private static publicPath = `${AppApi.server.publicApi}/doc`
  private static protectedPath = `${AppApi.server.protectedApi}/doc`



  public static paths={

    download: `${this.publicPath}/{id}`,

  }
}

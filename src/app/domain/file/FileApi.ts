import {AppApi} from "../AppApi";

export class FileApi {
  private static publicPath = `${AppApi.server.publicApi}/file`
  private static protectedPath = `${AppApi.server.protectedApi}/file`



  public static paths={

    download: `${this.publicPath}/download`,

  }
}

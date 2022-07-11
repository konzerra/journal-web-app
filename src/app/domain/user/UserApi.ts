import {AppApi} from "../AppApi";

export class UserApi {
  public static paths={
    login: `${AppApi.server.publicApi}/authenticate`,
    register: `${AppApi.server.publicApi}/user/register`,
    getAll: `${AppApi.server.publicApi}/user/all`,
  }
}

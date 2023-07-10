import {AppApi} from "../AppApi";

export class UserApi {
  public static paths={
    login: `${AppApi.server.publicApi}/auth/generate_jwt`,
    register: `${AppApi.server.publicApi}/user/register`,
    getAll: `${AppApi.server.publicApi}/user/all`,
    update: `${AppApi.server.protectedApi}/user`,
    resetPassword: `${AppApi.server.publicApi}/auth/reset_password`,
    generatePin: `${AppApi.server.publicApi}/auth/generate_password_pin/{email}`
  }
}

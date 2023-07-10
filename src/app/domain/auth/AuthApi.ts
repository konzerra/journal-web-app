import {AppApi} from "../AppApi";

export class AuthApi {
  public static paths={
    login: `${AppApi.server.publicApi}/auth/generate_jwt`,
    resetPassword: `${AppApi.server.publicApi}/auth/reset_password`,
    generatePin: `${AppApi.server.publicApi}/auth/generate_password_pin/{email}`
  }
}

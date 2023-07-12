import {AppApi} from "../domain/AppApi";

export const AuthApi = {
  signin: `${AppApi.publicApi}/auth/signin`,
  signup: `${AppApi.publicApi}/auth/signup`,
  reset: `${AppApi.publicApi}/auth/reset`,
  generate_password_pin: `${AppApi.publicApi}/auth/generate_password_pin`,
}

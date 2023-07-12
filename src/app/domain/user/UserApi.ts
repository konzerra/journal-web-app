import {AppApi} from "../AppApi";

export const UserApi =  {
  getAll: `${AppApi.publicApi}/user/all`,
  update: `${AppApi.protectedApi}/user`,

}

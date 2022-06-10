import {User} from "../user/User";

export interface JwtDto {
  jwtToken:string,
  user:User
}

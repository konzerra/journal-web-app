import {Role} from "../role/Role";

export interface User {
  id:Number
  name:string
  email:string
  roles:Array<Role>
}

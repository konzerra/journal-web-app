import {ModelI} from "../../_generic/model/ModelI";
import {Category} from "../category/Category";

export interface Reviewer extends ModelI {
  id:Number,
  name:string,
  email:string,
  category:Category,
  active:boolean
}

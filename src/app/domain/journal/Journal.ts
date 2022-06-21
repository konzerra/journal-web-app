import {ModelI} from "../../_generic/model/ModelI";

export interface Journal extends ModelI{
  id:number,
  name:string,
  version:string,
  status:string,
  articlesCount:number,
}

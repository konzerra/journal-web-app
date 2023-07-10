import {ModelI} from "../../../_generic/model/ModelI";

export interface Journal extends ModelI{
  id:Number,
  name:string,
  image:string,
  version:string,
  status:string,
  articlesCount:number,
  pdf: string
}

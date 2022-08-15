import {ModelI} from "../../_generic/model/ModelI";

export interface Journal extends ModelI{
  id:Number,
  name:string,
  imageId:Number | null,
  version:string,
  status:string,
  articlesCount:number,
  pdf: Number | null
}

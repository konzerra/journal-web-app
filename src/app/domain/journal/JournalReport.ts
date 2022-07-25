import {ModelI} from "../../_generic/model/ModelI";

export interface JournalReport extends ModelI{
  id:Number,
  name:string,
  articles:number,
  reviewers: Array<{
    name:string,
    email:string,
    articles:Number
  }>
}

import {JournalData} from "./JournalData";

export interface JournalFull {
  id:Number,
  status:String,
  image:string,
  dataList:Array<JournalData>,
}

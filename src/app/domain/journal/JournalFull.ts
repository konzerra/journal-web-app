import {JournalData} from "./JournalData";

export interface JournalFull {
  id:Number,
  status:String,
  dataList:Array<JournalData>,
}

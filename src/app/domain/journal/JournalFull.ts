import {JournalData} from "./JournalData";

export interface JournalFull {
  id:Number,
  status:string,
  image:string,
  pdf: string,
  dataList:Array<JournalData>,
}

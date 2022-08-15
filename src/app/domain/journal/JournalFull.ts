import {JournalData} from "./JournalData";

export interface JournalFull {
  id:Number,
  status:String,
  imageId:Number | null,
  pdf: Number | null,
  dataList:Array<JournalData>,
}

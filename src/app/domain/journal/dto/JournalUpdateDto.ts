import {UpdateDtoI} from "../../../_generic/model/UpdateDtoI";
import {JournalData} from "../JournalData";

export interface JournalUpdateDto extends UpdateDtoI{
  id:Number,
  image:string | null,
  status:String,
  dataList:Array<JournalData>,
}

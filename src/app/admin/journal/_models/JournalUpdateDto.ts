import {UpdateDtoI} from "../../../_generic/model/UpdateDtoI";
import {JournalData} from "../../../domain/journal/JournalData";

export interface JournalUpdateDto extends UpdateDtoI{
  id:Number,
  status:String,
  dataList:Array<JournalData>,
}

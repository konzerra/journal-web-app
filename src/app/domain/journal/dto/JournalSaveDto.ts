import {SaveDtoI} from "../../../_generic/model/SaveDtoI";
import {JournalData} from "../../../shared/models/journal/JournalData";

export interface JournalSaveDto extends SaveDtoI{
  dataList:Array<JournalData>,
}

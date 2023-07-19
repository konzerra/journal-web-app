import {SaveDtoI} from "../../../_generic/model/SaveDtoI";
import {JournalData} from "../../../domain/journal/JournalData";

export interface JournalSaveDto extends SaveDtoI{
  dataList:Array<JournalData>,
}

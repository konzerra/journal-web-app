import {SaveDtoI} from "../../../_generic/model/SaveDtoI";
import {JournalData} from "../JournalData";

export interface JournalSaveDto extends SaveDtoI{
  dataList:Array<JournalData>,
}

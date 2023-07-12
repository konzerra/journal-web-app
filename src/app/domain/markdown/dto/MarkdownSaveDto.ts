import {MarkdownData} from "../../../shared/models/markdown/MarkdownData";

export interface MarkdownSaveDto{
  id: string,
  dataList:Array<MarkdownData>
}

import {MarkdownData} from "../../../domain/markdown/MarkdownData";

export interface MarkdownSaveDto{
  id: string,
  dataList:Array<MarkdownData>
}

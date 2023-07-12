import {MarkdownData} from "../../../shared/models/markdown/MarkdownData";

export interface MarkdownUpdateDto {
  id: string,
  dataList:Array<MarkdownData>
}

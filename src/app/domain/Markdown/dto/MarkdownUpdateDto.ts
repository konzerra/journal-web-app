import {MarkdownData} from "../MarkdownData";

export interface MarkdownUpdateDto {
  id: Number,
  name: string,
  dataList:Array<MarkdownData>
}

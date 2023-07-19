import {MarkdownData} from "../../../domain/markdown/MarkdownData";

export interface MarkdownUpdateDto {
  id: string,
  dataList:Array<MarkdownData>
}

import {SaveDtoI} from "../../../_generic/model/SaveDtoI";
import {ArticleData} from "../ArticleData";

export interface ArticleSaveDto extends SaveDtoI{
  ownerId: Number,
  preferredCategory: string,
  dataList: Array<ArticleData>,
  journalId: Number,
}

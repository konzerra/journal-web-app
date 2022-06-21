import {SaveDtoI} from "../../../_generic/model/SaveDtoI";
import {ArticleData} from "../ArticleData";

export interface ArticleSaveDto extends SaveDtoI{
  ownerId: Number,
  dataList: Array<ArticleData>,
  journalId: Number,
}

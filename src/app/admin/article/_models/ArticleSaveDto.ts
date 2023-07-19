import {SaveDtoI} from "../../../_generic/model/SaveDtoI";
import {ArticleData} from "../../../domain/article/ArticleData";

export interface ArticleSaveDto extends SaveDtoI{
  ownerId: Number,
  preferredCategory: string,
  pages:Number,
  dataList: Array<ArticleData>,
  journalId: Number,
}

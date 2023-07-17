import {ArticleData} from "../../../shared/models/article/ArticleData";

export interface ArticleUpdateDtoByAdmin {
  id: Number | null,
  status: string,
  pages:Number,
  priceId: number | null,
  journalId: Number | null,
  categoryId: Number | null,
  pagesInJournal: string | null,
  antiplagiat: string | null,
  dataList: Array<ArticleData>,

}

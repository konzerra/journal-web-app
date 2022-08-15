import {ArticleData} from "../ArticleData";

export interface ArticleUpdateDtoByAdmin {
  id: Number | null,
  status: string,
  pages:Number,
  journalId: Number | null,
  categoryId: Number | null,
  pagesInJournal: string | null,
  antiplagiat: string | null,
  dataList: Array<ArticleData>,

}

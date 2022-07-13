import {ArticleData} from "../ArticleData";

export interface ArticleUpdateDtoByAdmin {
  id: Number | null,
  status: string,
  journalId: Number | null,
  categoryId: Number | null,
  pagesInJournal: string | null,
  antiplagiat: string | null,
  dataList: Array<ArticleData>,
  pdfDocId: Number | null,
  wordDocId: Number | null,
  reviewerBlankDocId: Number | null,
}

import {ArticleData} from "./ArticleData";
import {Category} from "../category/Category";
import {Journal} from "../journal/Journal";

export interface ArticleFull {
  id: Number,

  status: string,

  journal: Journal,
  category: Category | null

  reviewer: boolean,

  pagesInJournal: string | null
  antiplagiat: string | null
  dataList: Array<ArticleData>
  wordDocId: Number | null
  pdfDocId: Number | null
  reviewerBlankDocId: Number | null
  antiplagiatDocId: Number | null
}

import {ArticleData} from "./ArticleData";
import {Category} from "../../../domain/category/Category";
import {Journal} from "../journal/Journal";

export interface ArticleFull {
  id: Number,

  preferredCategory: string,
  pages:Number,
  status: string,

  journal: Journal,
  category: Category | null

  reviewer: string | null,

  pagesInJournal: string | null
  antiplagiat: string | null
  dataList: Array<ArticleData>
  wordDoc: string
  pdfDoc: string
  reviewerBlankDoc: string
  antiplagiatDoc: string
}

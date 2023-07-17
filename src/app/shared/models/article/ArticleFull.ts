import {ArticleData} from "./ArticleData";
import {Category} from "../../../domain/category/Category";
import {Journal} from "../journal/Journal";
import {Price} from "../price/Price";

export interface ArticleFull {
  id: Number,

  preferredCategory: string,
  pages:Number,
  status: string,

  journal: Journal,
  category: Category | null
  price: Price | null

  reviewer: string | null,

  pagesInJournal: string | null
  antiplagiat: string | null
  dataList: Array<ArticleData>
  wordDoc: string
  pdfDoc: string
  reviewerBlankDoc: string
  antiplagiatDoc: string
}

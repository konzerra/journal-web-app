import {ArticleData} from "./ArticleData";

export interface ArticleFull {
  id: Number,

  status: string,

  journal: {
    id: Number,
    name:string,
    version:string
  },
  category:{
    id: Number
    name: string
  } | null

  reviewer: boolean,

  pagesInJournal: string | null
  antiplagiat: string | null
  dataList: Array<ArticleData>
  wordDocId: Number | null
  pdfDocId: Number | null
  reviewerBlankDocId: Number | null
}

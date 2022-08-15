
export interface Article {
  id: Number,
  name: string,
  status: string,
  pages: Number,
  tags: string,
  preferredCategory: string,
  pdfDocId:Number | null
  wordDocId:Number | null
  journal: {
    id: Number
    name:string,
    version:string
  },
  category:{
    id: Number
    name: string
  } | null
  annotation: string,
  reviewer:string | null


  authors: Array<String>,




}

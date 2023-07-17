import {Price} from "../price/Price";

export interface Article {
  id: Number,
  name: string,
  status: string,
  pages: Number,
  tags: string,
  preferredCategory: string,
  pdfDoc:string,
  wordDoc:string,
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
  sum: number
  price: Price | null,

  authors: Array<String>,




}

import {ModelI} from "../../_generic/model/ModelI";

export interface ArticleData extends ModelI{
  id:Number | null,
  lang: string,
  name: string,
  authors: string,
  annotation: string,
  tags: string,
}

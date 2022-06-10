import {SaveDtoI} from "../../../_generic/model/SaveDtoI";

export interface CategorySaveDto extends SaveDtoI{
  dateList:[{
    name:string,
    lang:string,
    overview:string,
    status:string,
  }]

}

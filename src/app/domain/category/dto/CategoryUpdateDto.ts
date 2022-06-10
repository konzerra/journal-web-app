import {UpdateDtoI} from "../../../_generic/model/UpdateDtoI";

export interface CategoryUpdateDto extends UpdateDtoI{
  dateList:[{
    id:Number,
    name:string,
    lang:string,
    overview:string,
    status:string,
  }]
}

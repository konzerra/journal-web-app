import {UpdateDtoI} from "../../../_generic/model/UpdateDtoI";
import {CategoryData} from "../../../domain/category/CategoryData";

export interface CategoryUpdateDto extends UpdateDtoI{
  id: Number | null
  dataList:Array<CategoryData>
}

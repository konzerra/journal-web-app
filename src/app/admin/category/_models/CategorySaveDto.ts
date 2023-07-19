import {SaveDtoI} from "../../../_generic/model/SaveDtoI";
import {CategoryData} from "../../../domain/category/CategoryData";

export interface CategorySaveDto extends SaveDtoI{
  dataList:Array<CategoryData>

}

import {SaveDtoI} from "../../../_generic/model/SaveDtoI";
import {CategoryData} from "../CategoryData";

export interface CategorySaveDto extends SaveDtoI{
  dataList:Array<CategoryData>

}

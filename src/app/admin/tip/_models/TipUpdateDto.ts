import {TipData} from "../../../shared/models/tip/TipData";

export interface TipUpdateDto {
  id: Number,
  dataList: Array<TipData>
}

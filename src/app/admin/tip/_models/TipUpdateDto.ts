import {TipData} from "../../../domain/tip/TipData";

export interface TipUpdateDto {
  id: Number,
  dataList: Array<TipData>
}

import {PriceData} from "../../../shared/models/price/PriceData";

export interface PriceUpdateDto {
  id: Number,
  sum: number,
  dataList: Array<PriceData>
}

import {PriceData} from "../../../domain/price/PriceData";

export interface PriceUpdateDto {
  id: Number,
  sum: number,
  dataList: Array<PriceData>
}

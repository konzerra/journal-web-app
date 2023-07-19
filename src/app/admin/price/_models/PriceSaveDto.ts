import {PriceData} from "../../../domain/price/PriceData";

export interface PriceSaveDto {
  sum: number,
  dataList: Array<PriceData>
}

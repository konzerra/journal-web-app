import {PriceData} from "../../../shared/models/price/PriceData";

export interface PriceSaveDto {
  sum: number,
  dataList: Array<PriceData>
}

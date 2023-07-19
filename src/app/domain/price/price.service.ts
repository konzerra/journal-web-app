import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiPathUtil} from "../../_generic/util/ApiPathUtil";
import {PageRequestDto} from "../pagination/PageRequestDto";
import {PriceSaveDto} from "../../admin/price/_models/PriceSaveDto";
import {PriceApi} from "./PriceApi";
import {Price} from "./Price";
import {PricePage} from "./PricePage";
import {PriceFull} from "./PriceFull";
import {PriceUpdateDto} from "../../admin/price/_models/PriceUpdateDto";

@Injectable({
  providedIn:'root'
})
export class PriceService {
  constructor(
    protected httpClient:HttpClient
  ){

  }

  public save(saveDto:PriceSaveDto):Observable<any>{
    return this.httpClient.post(PriceApi.save,saveDto,{
      headers: new HttpHeaders(),
    })
  }

  public update(updateDto:PriceUpdateDto):Observable<any>{
    return this.httpClient.put(PriceApi.update,updateDto,{
      headers: new HttpHeaders(),
    })
  }

  public deleteById(id:string):Observable<any>{
    return this.httpClient.delete(ApiPathUtil.insertId(PriceApi.deleteById, id),
      {headers: new HttpHeaders()}
    )
  }

  public getByIdFull(id : string):Observable<PriceFull>{
    return this.httpClient.get<PriceFull>(
      ApiPathUtil.insertId(PriceApi.getByIdFull,id),
      { headers: new HttpHeaders()}
    )
  }

  public getAll():Observable<Price[]>{
    return this.httpClient.get<Price[]>(
      PriceApi.getAll,
      {headers: new HttpHeaders()}
    )
  }

  public getPaginated(pageRequestDto: PageRequestDto): Observable<PricePage> {
    return this.httpClient.post<PricePage>(PriceApi.getPaginated, pageRequestDto);
  }
}

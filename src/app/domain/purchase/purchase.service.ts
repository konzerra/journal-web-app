import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiPathUtil} from "../../_generic/util/ApiPathUtil";
import {PageRequestDto} from "../pagination/PageRequestDto";
import {PurchaseSaveDto} from "./dto/PurchaseSaveDto";
import {PurchaseApi} from "./PurchaseApi";
import {Purchase} from "./Purchase";
import {PurchasePage} from "./PurchasePage";


@Injectable({
  providedIn:'root'
})
export class PurchaseService {
  constructor(
    protected httpClient:HttpClient
  ){

  }

  public save(saveDto:PurchaseSaveDto):Observable<any>{
    return this.httpClient.post(PurchaseApi.save,saveDto,{
      headers: new HttpHeaders(),
    })
  }







  public getAllByJournalId(journalId: number):Observable<Purchase[]>{
    let path = ApiPathUtil.insertId(PurchaseApi.getAllByJournalId, journalId.toString() )
    return this.httpClient.get<Purchase[]>(path)
  }

  public getPaginatedByUserId(pageRequestDto: PageRequestDto, userId: number): Observable<PurchasePage> {
    let path = ApiPathUtil.insertId(PurchaseApi.getPaginatedByUserId, userId.toString())
    return this.httpClient.post<PurchasePage>(path, pageRequestDto);
  }
}

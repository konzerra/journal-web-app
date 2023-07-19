import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiPathUtil} from "../../_generic/util/ApiPathUtil";
import {PageRequestDto} from "../pagination/PageRequestDto";
import {Receipt} from "./Receipt";
import {ReceiptApi} from "./ReceiptApi";
import {ReceiptPage} from "./ReceiptPage";


@Injectable({
  providedIn:'root'
})
export class ReceiptService {
  constructor(
    protected httpClient:HttpClient
  ){

  }









  public getAllByUserId(userId: number):Observable<Receipt[]>{
    let path = ApiPathUtil.insertId(ReceiptApi.getAllByJournalId, userId.toString() )
    return this.httpClient.get<Receipt[]>(path)
  }

  public getPaginatedByUserId(pageRequestDto: PageRequestDto, userId: number): Observable<ReceiptPage> {
    let path = ApiPathUtil.insertId(ReceiptApi.getPaginatedByUserId, userId.toString())
    return this.httpClient.post<ReceiptPage>(path, pageRequestDto);
  }
}

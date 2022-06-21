import {ModelI} from "../model/ModelI";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiPathUtil} from "../util/ApiPathUtil";

export abstract class UseCaseDeleteByIdAbstract{
  protected constructor(
    protected apiPath:string,
    protected httpClient:HttpClient,
  ) {
  }

  protected abstract requestHeader : HttpHeaders //= new HttpHeaders({ 'No-Auth': 'True' })
  public execute(id : string):Observable<any>{
    return this.httpClient.delete(ApiPathUtil.insertId(this.apiPath, id),
      {headers: this.requestHeader})
  }
}

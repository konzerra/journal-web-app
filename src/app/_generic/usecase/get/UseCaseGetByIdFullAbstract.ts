
import {ModelI} from "../../model/ModelI";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiPathUtil} from "../../util/ApiPathUtil";

export abstract class UseCaseGetByIdFullAbstract<Model >{

  protected constructor() {}

  protected abstract apiPath:string
  protected abstract httpClient:HttpClient

  protected abstract requestHeader : HttpHeaders //= new HttpHeaders({ 'No-Auth': 'True' })

  public execute(id : string):Observable<Model>{
    return this.httpClient.get<Model>(ApiPathUtil.insertId(this.apiPath,id),
      { headers: this.requestHeader})
  }
}

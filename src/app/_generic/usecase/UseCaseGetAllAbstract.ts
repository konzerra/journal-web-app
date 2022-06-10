import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ModelI} from "../model/ModelI";

export abstract class UseCaseGetAllAbstract<Model extends ModelI>{
  protected constructor(
    protected apiPath:string,
    protected httpClient:HttpClient
  ) {
  }

  publicRequestHeader = new HttpHeaders({ 'No-Auth': 'True' })

  public execute():Observable<Array<Model>>{
    return this.httpClient.get<Array<Model>>(this.apiPath,{
      headers: this.publicRequestHeader,
    })
  }

}

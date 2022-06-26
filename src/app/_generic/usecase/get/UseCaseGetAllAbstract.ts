import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ModelI} from "../../model/ModelI";

export abstract class UseCaseGetAllAbstract<Model extends ModelI>{

  protected constructor() {}

  protected abstract apiPath:string
  protected abstract httpClient:HttpClient
  protected abstract requestHeader : HttpHeaders //= new HttpHeaders({ 'No-Auth': 'True' })

  public execute():Observable<Array<Model>>{
    return this.httpClient.get<Array<Model>>(this.apiPath,{
      headers: this.requestHeader,
    })
  }

}

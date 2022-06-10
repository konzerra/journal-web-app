import {ModelI} from "../model/ModelI";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ModelPageI} from "../model/ModelPageI";

export abstract class UseCaseGetAllPaginatedAbstract <Model,ModelPage extends ModelPageI<Model>>{
  protected constructor(
    protected apiPath:string,
    protected httpClient:HttpClient
  ) {
  }

  publicRequestHeader = new HttpHeaders({ 'No-Auth': 'True' })

  public execute(pageNumber:Number):Observable<ModelPage>{
    return this.httpClient.get<ModelPage>(this.apiPath+pageNumber,{
      headers: this.publicRequestHeader,
    })
  }

}

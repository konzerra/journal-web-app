import {ModelI} from "../../model/ModelI";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ModelPageI} from "../../model/ModelPageI";
import {ApiPathUtil} from "../../util/ApiPathUtil";

export abstract class UseCaseGetAllPaginatedAbstract <Model,ModelPage extends ModelPageI<Model>>{

  protected constructor() {}

  protected abstract apiPath:string
  protected abstract httpClient:HttpClient

  protected abstract requestHeader : HttpHeaders //= new HttpHeaders({ 'No-Auth': 'True' })

  public execute(pageNumber:Number, pageSize: Number):Observable<ModelPage>{
    return this.httpClient.get<ModelPage>(ApiPathUtil.insertPageNumberAndSize(
      this.apiPath,
      pageNumber.toString(),
      pageSize.toString()
    ),{
      headers: this.requestHeader,
    })
  }

}

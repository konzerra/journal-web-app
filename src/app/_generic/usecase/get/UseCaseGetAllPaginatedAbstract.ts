import {ModelI} from "../../model/ModelI";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ModelPageI} from "../../model/ModelPageI";
import {ApiPathUtil} from "../../util/ApiPathUtil";

export abstract class UseCaseGetAllPaginatedAbstract <Model,ModelPage extends ModelPageI<Model>>{
  protected constructor(
    protected apiPath:string,
    protected httpClient:HttpClient
  ) {
  }

  protected abstract requestHeader : HttpHeaders //= new HttpHeaders({ 'No-Auth': 'True' })

  public execute(pageNumber:Number):Observable<ModelPage>{
    return this.httpClient.get<ModelPage>(ApiPathUtil.insertPageNumber(this.apiPath,pageNumber.toString()),{
      headers: this.requestHeader,
    })
  }

}

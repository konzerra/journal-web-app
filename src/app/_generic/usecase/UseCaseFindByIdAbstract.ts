
import {ModelI} from "../model/ModelI";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

export abstract class UseCaseFindByIdAbstract<Model extends ModelI, ReturnModel extends ModelI>{
  protected constructor(
    protected apiPath:string,
    protected httpClient:HttpClient,
  ) {
  }

  public execute(model : Model):Observable<ReturnModel>{
    return this.httpClient.get<ReturnModel>(this.apiPath + model.id)
  }
}

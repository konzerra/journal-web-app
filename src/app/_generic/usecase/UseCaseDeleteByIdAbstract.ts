import {ModelI} from "../model/ModelI";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

export abstract class UseCaseDeleteByIdAbstract<Model extends ModelI>{
  protected constructor(
    protected apiPath:string,
    protected httpClient:HttpClient,
  ) {
  }

  public execute(model : Model):Observable<any>{
    return this.httpClient.delete(this.apiPath + model.id)
  }
}

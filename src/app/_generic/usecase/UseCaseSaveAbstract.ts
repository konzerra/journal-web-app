import {ModelI} from "../model/ModelI";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {SaveDtoI} from "../model/SaveDtoI";

export abstract class UseCaseSaveAbstract<SaveDto extends SaveDtoI>{
  protected constructor(
    protected apiPath:string,
    protected httpClient:HttpClient
  ) {
  }

  publicRequestHeader = new HttpHeaders({ 'No-Auth': 'True' })

  public execute(saveDto:SaveDto):Observable<any>{
    return this.httpClient.post(this.apiPath,saveDto,{
      headers: this.publicRequestHeader,
    })
  }

}

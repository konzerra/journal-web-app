import {ModelI} from "../model/ModelI";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {UpdateDtoI} from "../model/UpdateDtoI";

export abstract class UseCaseUpdateAbstract<UpdateDto>{

  protected constructor() {}

  protected abstract apiPath:string
  protected abstract httpClient:HttpClient

  protected abstract requestHeader : HttpHeaders

  public execute(updateDto:UpdateDto):Observable<any>{
    console.log(updateDto)
    return this.httpClient.put(this.apiPath,updateDto,{
      headers: this.requestHeader,
    })
  }

}

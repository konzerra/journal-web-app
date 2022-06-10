import {ModelI} from "../model/ModelI";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {UpdateDtoI} from "../model/UpdateDtoI";

export abstract class UseCaseUpdateAbstract<UpdateDto extends UpdateDtoI>{
  protected constructor(
    protected apiPath:string,
    protected httpClient:HttpClient
  ) {
  }

  publicRequestHeader = new HttpHeaders({ 'No-Auth': 'True' })

  public execute(updateDto:UpdateDto):Observable<any>{
    console.log(updateDto)
    return this.httpClient.put(this.apiPath,updateDto,{
      headers: this.publicRequestHeader,
    })
  }

}

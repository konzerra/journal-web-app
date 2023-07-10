import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JwtDto} from "../../auth/JwtDto";
import {UserApi} from "../UserApi";
import {ApiPathUtil} from "../../../_generic/util/ApiPathUtil";


@Injectable({
  providedIn: 'root'
})
export class UserUseCaseGeneratePasswordPin {
  private requestHeader = new HttpHeaders({ 'No-Auth': 'True' })
  constructor(
    private httpClient:HttpClient
  ) { }

  execute(email:string){
    return this.httpClient.get<JwtDto>(ApiPathUtil.insertEmail(UserApi.paths.generatePin,email), {
      headers: this.requestHeader,
    })
  }
}

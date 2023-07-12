import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserApi} from "../UserApi";
import {AuthSigninDto} from "../../../auth/_models/auth.signin.dto";
import {JwtDto} from "../../auth/JwtDto";

@Injectable({
  providedIn: 'root'
})
export class UserUseCaseLogin {
  private requestHeader = new HttpHeaders({ 'No-Auth': 'True' })
  constructor(
    private httpClient:HttpClient
  ) { }

  execute(loginDto:AuthSigninDto){
    return this.httpClient.post<JwtDto>(UserApi.paths.login, loginDto, {
      headers: this.requestHeader,
    })
  }
}

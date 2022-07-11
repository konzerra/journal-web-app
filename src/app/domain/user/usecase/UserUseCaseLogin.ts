import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserApi} from "../UserApi";
import {UserLoginDto} from "../dto/UserLoginDto";
import {JwtDto} from "../../jwt/JwtDto";

@Injectable({
  providedIn: 'root'
})
export class UserUseCaseLogin {
  private requestHeader = new HttpHeaders({ 'No-Auth': 'True' })
  constructor(
    private httpClient:HttpClient
  ) { }

  execute(loginDto:UserLoginDto){
    return this.httpClient.post<JwtDto>(UserApi.paths.login, loginDto, {
      headers: this.requestHeader,
    })
  }
}

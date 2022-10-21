import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserLoginDto} from "../dto/UserLoginDto";
import {JwtDto} from "../../jwt/JwtDto";
import {UserApi} from "../UserApi";
import {PasswordResetDto} from "../dto/PasswordResetDto";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class UserUseCaseResetPassword {
  private requestHeader = new HttpHeaders({ 'No-Auth': 'True' })
  constructor(
    private httpClient:HttpClient
  ) { }

  execute(passwordResetDto:PasswordResetDto){
    return this.httpClient.post<JwtDto>(UserApi.paths.resetPassword, passwordResetDto, {
      headers: this.requestHeader,
    })
  }
}

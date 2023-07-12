import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthSigninDto} from "../../../auth/_models/auth.signin.dto";
import {JwtDto} from "../../auth/JwtDto";
import {UserApi} from "../UserApi";
import {AuthResetDto} from "../../../auth/_models/auth.reset.dto";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class UserUseCaseResetPassword {
  private requestHeader = new HttpHeaders({ 'No-Auth': 'True' })
  constructor(
    private httpClient:HttpClient
  ) { }

  execute(passwordResetDto:AuthResetDto){
    return this.httpClient.post<JwtDto>(UserApi.paths.resetPassword, passwordResetDto, {
      headers: this.requestHeader,
    })
  }
}

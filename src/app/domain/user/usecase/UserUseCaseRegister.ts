import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserApi} from "../UserApi";
import {Injectable} from "@angular/core";
import {AuthSignupDto} from "../../../auth/_models/auth.signup.dto";


@Injectable({
  providedIn: 'root'
})
export class UserUseCaseRegister {
  constructor(
    private httpClient:HttpClient
  ) { }

  private requestHeader = new HttpHeaders({ 'No-Auth': 'True' })
  execute(userRegisterDto:AuthSignupDto){
    return this.httpClient.post(UserApi.paths.register,userRegisterDto, {
      headers: this.requestHeader,
    })
  }
}

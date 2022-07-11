import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserApi} from "../UserApi";
import {Injectable} from "@angular/core";
import {UserRegisterDto} from "../dto/UserRegisterDto";


@Injectable({
  providedIn: 'root'
})
export class UserUseCaseRegister {
  constructor(
    private httpClient:HttpClient
  ) { }

  private requestHeader = new HttpHeaders({ 'No-Auth': 'True' })
  execute(userRegisterDto:UserRegisterDto){
    return this.httpClient.post(UserApi.paths.register,userRegisterDto, {
      headers: this.requestHeader,
    })
  }
}

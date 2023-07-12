import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserApi} from "../UserApi";
import {Injectable} from "@angular/core";
import {AuthSignupDto} from "../../../auth/_models/auth.signup.dto";
import {UserUpdateDto} from "../dto/UserUpdateDto";


@Injectable({
  providedIn: 'root'
})
export class UserUseCaseUpdate {
  constructor(
    private httpClient:HttpClient
  ) { }

  private requestHeader = new HttpHeaders({  })
  execute(updateDto:UserUpdateDto){
    return this.httpClient.put(UserApi.update,updateDto, {
      headers: this.requestHeader,
    })
  }
}

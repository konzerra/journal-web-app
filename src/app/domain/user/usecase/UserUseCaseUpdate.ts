import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserApi} from "../UserApi";
import {Injectable} from "@angular/core";
import {UserUpdateDto} from "../../../user/profile/_models/UserUpdateDto";


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

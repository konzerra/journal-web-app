import {Injectable} from "@angular/core";
import {UseCaseGetAllAbstract} from "../../../_generic/usecase/UseCaseGetAllAbstract";
import {HttpClient} from "@angular/common/http";
import {User} from "../User";
import {UserApi} from "../api-path/UserApi";

@Injectable({
  providedIn : "root"
})
export class UserUseCaseGetAll extends UseCaseGetAllAbstract<User>{
  constructor(
    httpClient:HttpClient
  ) {
    super(
      UserApi.paths.getAll,
      httpClient
    );
  }
}

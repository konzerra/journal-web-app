import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JournalApi} from "../api-path/JournalApi";
import {Journal} from "../Journal";
import {JournalUpdateDto} from "../dto/JournalUpdateDto";
import {UseCaseGetByIdFullAbstract} from "../../../_generic/usecase/get/UseCaseGetByIdFullAbstract";


@Injectable({
  providedIn : "root"
})
export class JournalUseCaseGetByIdFull extends UseCaseGetByIdFullAbstract<JournalUpdateDto> {
  constructor(
    httpClient:HttpClient
  ) {
    super(
      JournalApi.paths.getByIdFull,
      httpClient
    );
  }

  protected requestHeader: HttpHeaders= new HttpHeaders();
}

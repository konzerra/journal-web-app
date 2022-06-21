
import {Injectable} from "@angular/core";

import {HttpClient, HttpHeaders} from "@angular/common/http";

import {UseCaseUpdateAbstract} from "../../../_generic/usecase/UseCaseUpdateAbstract";

import {JournalUpdateDto} from "../dto/JournalUpdateDto";
import {JournalApi} from "../api-path/JournalApi";

@Injectable({
  providedIn : "root"
})
export class JournalUseCaseUpdate extends UseCaseUpdateAbstract<JournalUpdateDto>{
  constructor(
    httpClient:HttpClient
  ) {
    super(
      JournalApi.paths.update,
      httpClient
    );
  }

  protected requestHeader: HttpHeaders = new HttpHeaders();
}

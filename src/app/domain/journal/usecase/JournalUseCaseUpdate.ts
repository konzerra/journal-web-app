
import {Injectable} from "@angular/core";

import {HttpClient, HttpHeaders} from "@angular/common/http";

import {UseCaseUpdateAbstract} from "../../../_generic/usecase/UseCaseUpdateAbstract";

import {JournalUpdateDto} from "../dto/JournalUpdateDto";
import {JournalApi} from "../JournalApi";

@Injectable({
  providedIn : "root"
})
export class JournalUseCaseUpdate extends UseCaseUpdateAbstract<FormData>{
  protected apiPath: string = JournalApi.paths.update
  constructor(
    protected httpClient:HttpClient
  ) {
    super()
  }

  protected requestHeader: HttpHeaders = new HttpHeaders();
}

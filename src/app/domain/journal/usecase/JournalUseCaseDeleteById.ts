import {Injectable} from "@angular/core";
import {UseCaseGetAllAbstract} from "../../../_generic/usecase/UseCaseGetAllAbstract";

import {HttpClient} from "@angular/common/http";

import {UseCaseDeleteByIdAbstract} from "../../../_generic/usecase/UseCaseDeleteByIdAbstract";
import {Journal} from "../Journal";
import {JournalApi} from "../api-path/JournalApi";

@Injectable({
  providedIn : "root"
})
export class JournalUseCaseDeleteById extends UseCaseDeleteByIdAbstract<Journal>{
  constructor(
    httpClient:HttpClient
  ) {
    super(
      JournalApi.paths.deleteById,
      httpClient
    );
  }
}

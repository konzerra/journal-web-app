import {Injectable} from "@angular/core";
import {UseCaseGetAllAbstract} from "../../../_generic/usecase/UseCaseGetAllAbstract";
import {HttpClient} from "@angular/common/http";
import {UseCaseFindByIdAbstract} from "../../../_generic/usecase/UseCaseFindByIdAbstract";
import {JournalApi} from "../api-path/JournalApi";
import {Journal} from "../Journal";
import {JournalUpdateDto} from "../dto/JournalUpdateDto";


@Injectable({
  providedIn : "root"
})
export class JournalUseCaseFindByIdForUpdate extends UseCaseFindByIdAbstract<Journal, JournalUpdateDto> {
  constructor(
    httpClient:HttpClient
  ) {
    super(
      JournalApi.paths.getById,
      httpClient
    );
  }
}

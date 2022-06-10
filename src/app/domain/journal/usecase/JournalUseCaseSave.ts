
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UseCaseSaveAbstract} from "../../../_generic/usecase/UseCaseSaveAbstract";
import {JournalSaveDto} from "../dto/JournalSaveDto";
import {JournalApi} from "../api-path/JournalApi";

@Injectable({
  providedIn : "root"
})
export class JournalUseCaseSave extends UseCaseSaveAbstract<JournalSaveDto>{
  constructor(
    httpClient:HttpClient
  ) {
    super(
      JournalApi.paths.save,
      httpClient
    );
  }
}

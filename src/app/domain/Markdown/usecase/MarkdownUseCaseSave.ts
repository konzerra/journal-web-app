
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UseCaseSaveAbstract} from "../../../_generic/usecase/UseCaseSaveAbstract";
import {MarkdownSaveDto} from "../dto/MarkdownSaveDto";
import {MarkdownApi} from "../MarkdownApi";

@Injectable({
  providedIn : "root"
})
export class MarkdownUseCaseSave extends UseCaseSaveAbstract<MarkdownSaveDto>{

  protected apiPath: string = MarkdownApi.paths.save
  constructor(
    protected httpClient:HttpClient
  ) {
    super()
  }

  protected requestHeader: HttpHeaders = new HttpHeaders();
}

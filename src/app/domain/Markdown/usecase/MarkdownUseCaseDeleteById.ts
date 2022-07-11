import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UseCaseDeleteByIdAbstract} from "../../../_generic/usecase/UseCaseDeleteByIdAbstract";
import {MarkdownApi} from "../MarkdownApi";


@Injectable({
  providedIn : "root"
})
export class MarkdownUseCaseDeleteById extends UseCaseDeleteByIdAbstract{
  protected apiPath: string = MarkdownApi.paths.deleteById
  constructor(
    protected httpClient:HttpClient
  ) {
    super()
  }

  protected requestHeader: HttpHeaders = new HttpHeaders();
}


import {Injectable} from "@angular/core";

import {HttpClient, HttpHeaders} from "@angular/common/http";

import {UseCaseUpdateAbstract} from "../../../_generic/usecase/UseCaseUpdateAbstract";
import {MarkdownApi} from "../MarkdownApi";
import {MarkdownUpdateDto} from "../dto/MarkdownUpdateDto";

@Injectable({
  providedIn : "root"
})
export class MarkdownUseCaseUpdate extends UseCaseUpdateAbstract<MarkdownUpdateDto>{

  protected apiPath: string = MarkdownApi.paths.update
  constructor(
    protected httpClient:HttpClient
  ) {
    super()
  }

  protected requestHeader: HttpHeaders = new HttpHeaders();
}

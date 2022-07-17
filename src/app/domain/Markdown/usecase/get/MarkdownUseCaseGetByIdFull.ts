import {Injectable} from "@angular/core";

import {HttpClient, HttpHeaders} from "@angular/common/http";

import {UseCaseGetByIdFullAbstract} from "../../../../_generic/usecase/get/UseCaseGetByIdFullAbstract";
import {MarkdownApi} from "../../MarkdownApi";
import {MarkdownFull} from "../../MarkdownFull";


@Injectable({
  providedIn : "root"
})
export class MarkdownUseCaseGetByIdFull extends UseCaseGetByIdFullAbstract<MarkdownFull> {

  protected apiPath: string = MarkdownApi.paths.getByIdFull
  constructor(
    protected httpClient:HttpClient
  ) {
    super()
  }

  protected requestHeader: HttpHeaders = new HttpHeaders();
}

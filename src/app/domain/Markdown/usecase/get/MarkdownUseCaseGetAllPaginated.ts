import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UseCaseGetAllPaginatedAbstract} from "../../../../_generic/usecase/get/UseCaseGetAllPaginatedAbstract";
import {Markdown} from "../../Markdown";
import {MarkdownPage} from "../../MarkdownPage";
import {MarkdownApi} from "../../MarkdownApi";


@Injectable({
  providedIn : "root"
})
export class MarkdownUseCaseGetAllPaginated extends UseCaseGetAllPaginatedAbstract<Markdown, MarkdownPage>{

  protected apiPath: string = MarkdownApi.paths.getAllPaginated
  constructor(
    protected httpClient:HttpClient
  ) {
    super()
  }

  protected requestHeader: HttpHeaders = new HttpHeaders({});
}

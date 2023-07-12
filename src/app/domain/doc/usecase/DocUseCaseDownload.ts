import {Injectable} from "@angular/core";
import {JournalApi} from "../../../shared/models/journal/JournalApi";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {DocApi} from "../DocApi";
import {ApiPathUtil} from "../../../_generic/util/ApiPathUtil";
import {Observable} from "rxjs";


@Injectable({
  providedIn:"root"
})
export class DocUseCaseDownload {
  private apiPath: string = DocApi.download
  constructor(
    private httpClient:HttpClient
  ) {}

  protected requestHeader: HttpHeaders= new HttpHeaders({'No-Auth':'true'});

  execute(id:Number):Observable<Blob>{
    return this.httpClient.get(ApiPathUtil.insertId(this.apiPath,id.toString()), {
      headers: this.requestHeader,
      responseType: "blob"
    })
  }
}

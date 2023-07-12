import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiPathUtil} from "../../_generic/util/ApiPathUtil";
import {PageRequestDto} from "../../shared/models/pagination/PageRequestDto";
import {MarkdownSaveDto} from "./dto/MarkdownSaveDto";
import {MarkdownUpdateDto} from "./dto/MarkdownUpdateDto";
import {MarkdownFull} from "./MarkdownFull";
import {MarkdownApi} from "./MarkdownApi";
import {MarkdownPage} from "./MarkdownPage";
import {Markdown} from "./Markdown";

@Injectable({
  providedIn:"root"
})
export class MarkdownService {
  constructor(
    protected httpClient:HttpClient
  ){

  }

  public save(saveDto:MarkdownSaveDto):Observable<any>{
    return this.httpClient.post(MarkdownApi.save,saveDto,{
      headers: new HttpHeaders(),
    })
  }

  public update(updateDto:MarkdownUpdateDto):Observable<any>{
    return this.httpClient.put(MarkdownApi.update,updateDto,{
      headers: new HttpHeaders(),
    })
  }

  public deleteById(id:string):Observable<any>{
    return this.httpClient.delete(ApiPathUtil.insertId(MarkdownApi.deleteById, id),
      {headers: new HttpHeaders()}
    )
  }

  public getById(id : string):Observable<Markdown>{
    return this.httpClient.get<Markdown>(
      ApiPathUtil.insertId(MarkdownApi.getByIdFull,id),
      { headers: new HttpHeaders()}
    )
  }

  public getByIdFull(id : string):Observable<MarkdownFull>{
    return this.httpClient.get<MarkdownFull>(
      ApiPathUtil.insertId(MarkdownApi.getByIdFull,id),
      { headers: new HttpHeaders()}
    )
  }




  public getPaginated(pageRequestDto: PageRequestDto): Observable<MarkdownPage> {
    const params = {
      pageRequestDto: encodeURIComponent(JSON.stringify(pageRequestDto)),
    };

    return this.httpClient.get<MarkdownPage>(MarkdownApi.getPaginated, {
      headers: new HttpHeaders(),
      params: params,
    });
  }

  public getAllNames(): Observable<Array<string>>{
    return this.httpClient.get<Array<string>>(
      MarkdownApi.getAllNames,
      {
        headers: new HttpHeaders()
      }
    );
  }
}

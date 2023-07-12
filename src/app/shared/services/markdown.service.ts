import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiPathUtil} from "../../_generic/util/ApiPathUtil";
import {PageRequestDto} from "../models/pagination/PageRequestDto";
import {MarkdownSaveDto} from "../../domain/markdown/dto/MarkdownSaveDto";
import {MarkdownUpdateDto} from "../../domain/markdown/dto/MarkdownUpdateDto";
import {MarkdownFull} from "../models/markdown/MarkdownFull";
import {MarkdownApi} from "../models/markdown/MarkdownApi";
import {MarkdownPage} from "../models/markdown/MarkdownPage";
import {Markdown} from "../models/markdown/Markdown";

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
      ApiPathUtil.insertId(MarkdownApi.getById,id),
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
    return this.httpClient.post<MarkdownPage>(MarkdownApi.getPaginated, pageRequestDto);
  }

  public getAllNames(): Observable<Array<{ id: string, name: string }>>{
    return this.httpClient.get<Array<{ id: string, name: string }>>(
      MarkdownApi.getAllNames,
      {
        headers: new HttpHeaders()
      }
    );
  }
}

import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ApiPathUtil} from "../../_generic/util/ApiPathUtil";
import {PageRequestDto} from "../../shared/models/pagination/PageRequestDto";
import {JournalSaveDto} from "./_models/JournalSaveDto";
import {JournalUpdateDto} from "./_models/JournalUpdateDto";
import {JournalFull} from "../../shared/models/journal/JournalFull";
import {Journal} from "../../shared/models/journal/Journal";
import {AdminJournalApi} from "./_models/AdminJournalApi";
import {JournalPage} from "../../shared/models/journal/JournalPage";
import {JournalReport} from "./_models/JournalReport";
import {ArticlePage} from "../../shared/models/article/ArticlePage";
import {JournalStatus} from "../../shared/models/journal/JournalStatus";

@Injectable()
export class AdminJournalService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public save(saveDto:JournalSaveDto, image: File):Observable<any>{
    let formData = new FormData()
    formData.set('saveDto' , new Blob([JSON.stringify(saveDto)],{
      type: "application/json"
    }))

    formData.append("image", new Blob([image],{
      type: image.type
    }))


    return this.httpClient.post(AdminJournalApi.save,formData)
  }

  public update(updateDto:JournalUpdateDto, image: File | null, pdfFile: File | null):Observable<any>{
    let formData = new FormData()
    formData.set('updateDto' , new Blob([JSON.stringify(updateDto)],{
      type: "application/json"
    }))

    if (image != null) {
      formData.append("image", new Blob([image],{
        type: image.type
      }))
    }

    if (pdfFile != null) {
      formData.append("pdfFile", new Blob([pdfFile],{
        type: pdfFile.type
      }))
    }

    return this.httpClient.put(AdminJournalApi.update,formData,{
      headers: new HttpHeaders(),
    })
  }

  public makeReport(journalId: string):Observable<JournalReport>{
    return this.httpClient.get<JournalReport>(
      ApiPathUtil.insertId(AdminJournalApi.makeReport,journalId)
    )
  }

  public deleteById(id:string):Observable<any>{
    return this.httpClient.delete(ApiPathUtil.insertId(AdminJournalApi.deleteById, id),
      {headers: new HttpHeaders()}
    )
  }

  public getByIdFull(id : string):Observable<JournalFull>{
    return this.httpClient.get<JournalFull>(
      ApiPathUtil.insertId(AdminJournalApi.getByIdFull,id)
    )
  }



  public getPaginated(pageRequestDto: PageRequestDto): Observable<JournalPage> {
    const params = {
      pageRequestDto: encodeURIComponent(JSON.stringify(pageRequestDto)),
    };

    return this.httpClient.get<JournalPage>(AdminJournalApi.getPaginated, {
      headers: new HttpHeaders(),
      params: params,
    });
  }

  public getPaginatedJournalArticles(journalId:Number, pageRequestDto: PageRequestDto): Observable<ArticlePage>{
    const params = {
      pageRequestDto: encodeURIComponent(JSON.stringify(pageRequestDto)),
    };

    return this.httpClient.get<ArticlePage>(ApiPathUtil.insertId(AdminJournalApi.getPaginatedJournalArticles, journalId.toString()), {
      headers: new HttpHeaders(),
      params: params,
    });
  }

  public getAllByStatus(status: string):Observable<Array<Journal>>{
    let apiPath = AdminJournalApi.getAllByStatus.replace('{status}', status)
    return this.httpClient.get<Journal[]>(apiPath)
  }

  public getPaginatedByStatus(status: string, pageRequestDto: PageRequestDto): Observable<JournalPage> {
    let apiPath: string = AdminJournalApi.getPaginatedByStatus.replace("{status}",JournalStatus.Published)
    const params = {
      pageRequestDto: encodeURIComponent(JSON.stringify(pageRequestDto)),
    };

    return this.httpClient.get<JournalPage>(apiPath, {
      headers: new HttpHeaders(),
      params: params,
    });
  }
}

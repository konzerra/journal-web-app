import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {Observable} from "rxjs";
import {ApiPathUtil} from "../../_generic/util/ApiPathUtil";
import {PageRequestDto} from "../../shared/models/pagination/PageRequestDto";
import {ArticleSaveDto} from "./dto/ArticleSaveDto";
import {ArticleApi} from "../../shared/models/article/ArticleApi";
import {ArticleUpdateDtoByAdmin} from "./dto/ArticleUpdateDtoByAdmin";
import {ArticleFull} from "../../shared/models/article/ArticleFull";
import {Article} from "../../shared/models/article/Article";
import {ArticleSearchDto} from "./ArticleSearchDto";
import {ArticlePage} from "../../shared/models/article/ArticlePage";
import {ArticleUpdateDtoByReviewer} from "./dto/ArticleUpdateDtoByReviewer";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public save(saveDto:ArticleSaveDto, file: File):Observable<any>{
    let formData = new FormData()
    formData.set('saveDto' , new Blob([JSON.stringify(saveDto)],{
      type: "application/json"
    }))

    formData.append("file", new Blob([file],{
      type: file.type
    }))


    return this.httpClient.post(ArticleApi.paths.save,formData)
  }

  public updateByAdmin(
    updateDto: ArticleUpdateDtoByAdmin,
    wordFile: File | null,
    pdfFile: File | null,
    antiplagiatFile: File | null
  ):Observable<any>{
    let formData = new FormData()

    formData.set("updateDto", new Blob([JSON.stringify(updateDto)],{
      type:"application/json"
    }))
    if(wordFile!=null){
      formData.set("wordFile", new Blob([wordFile],{
        type: wordFile.type
      }))
    }
    if(pdfFile!= null){
      formData.set("pdfFile", new Blob([pdfFile],{
        type: pdfFile.type
      }))
    }
    if(antiplagiatFile!= null){
      formData.set("antiplagiatFile", new Blob([antiplagiatFile],{
        type: antiplagiatFile.type
      }))
    }

    return this.httpClient.put(ArticleApi.paths.updateByAdmin,formData,{
      headers: new HttpHeaders(),
    })
  }
  public updateByReviewer(
    updateDto: ArticleUpdateDtoByReviewer,
    reviewerBlancFile: File | null,
  ):Observable<any>{
    let formData = new FormData()

    formData.set("updateDto", new Blob([JSON.stringify(updateDto)],{
      type:"application/json"
    }))

    if(reviewerBlancFile!=null){
      formData.set("reviewerBlankFile", new Blob([reviewerBlancFile],{
        type: reviewerBlancFile.type
      }))
    }
    return this.httpClient.put(ArticleApi.paths.updateByReviewer,formData,{
      headers: new HttpHeaders(),
    })
  }


  public deleteById(id:string):Observable<any>{
    return this.httpClient.delete(ApiPathUtil.insertId(ArticleApi.paths.deleteById, id),
      {headers: new HttpHeaders()}
    )
  }

  public getByIdFull(id : string):Observable<ArticleFull>{
    return this.httpClient.get<ArticleFull>(
      ApiPathUtil.insertId(ArticleApi.paths.getByIdFull,id)
    )
  }

  public getMyArticles(userId:Number): Observable<Array<Article>> {
    return this.httpClient.get<Array<Article>>(
      ApiPathUtil.insertId(ArticleApi.paths.getMyArticles,userId.toString())
    )
  }

  public search(pageNumber: Number, articleSearchDto: ArticleSearchDto):Observable<ArticlePage>{
    let apiPath = ApiPathUtil.insertPageNumber(
      ArticleApi.paths.search,
      pageNumber.toString(),
    )
    return this.httpClient.post<ArticlePage>(apiPath,articleSearchDto)
  }
}

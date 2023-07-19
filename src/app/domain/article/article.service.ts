import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {Observable} from "rxjs";
import {ApiPathUtil} from "../../_generic/util/ApiPathUtil";
import {ArticleSaveDto} from "../../admin/article/_models/ArticleSaveDto";
import {ArticleApi} from "./ArticleApi";
import {ArticleUpdateDtoByAdmin} from "../../admin/article/_models/ArticleUpdateDtoByAdmin";
import {ArticleFull} from "./ArticleFull";
import {Article} from "./Article";
import {ArticleSearchDto} from "../../public/articles/ArticleSearchDto";
import {ArticlePage} from "./ArticlePage";
import {ArticleUpdateDtoByReviewer} from "../../reviewer-portal/dto/ArticleUpdateDtoByReviewer";


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


    return this.httpClient.post(ArticleApi.save,formData)
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
      let word =  new Blob([wordFile],  {type: wordFile.type})
      formData.set("wordFile", word, wordFile.name)
    }
    if(pdfFile!= null){
      let pdf =  new Blob([pdfFile],  {type: pdfFile.type})
      formData.set("pdfFile", pdf, pdfFile.name)
    }
    if(antiplagiatFile!= null){
      let antiplagiat =  new Blob([antiplagiatFile],  {type: antiplagiatFile.type})
      formData.set("antiplagiatFile", antiplagiat, antiplagiatFile.name)
    }

    return this.httpClient.put(ArticleApi.updateByAdmin,formData,{
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
      let reviewerBlanc =  new Blob([reviewerBlancFile],  {type: reviewerBlancFile.type})
      formData.set("reviewerBlankFile", reviewerBlanc, reviewerBlancFile.name)
    }
    return this.httpClient.put(ArticleApi.updateByReviewer,formData,{
      headers: new HttpHeaders(),
    })
  }


  public deleteById(id:string):Observable<any>{
    return this.httpClient.delete(ApiPathUtil.insertId(ArticleApi.deleteById, id),
      {headers: new HttpHeaders()}
    )
  }

  public getByIdFull(id : string):Observable<ArticleFull>{
    return this.httpClient.get<ArticleFull>(
      ApiPathUtil.insertId(ArticleApi.getByIdFull,id)
    )
  }

  public getMyArticles(userId:Number): Observable<Array<Article>> {
    return this.httpClient.get<Array<Article>>(
      ApiPathUtil.insertId(ArticleApi.getMyArticles,userId.toString())
    )
  }

  public search(pageNumber: Number, articleSearchDto: ArticleSearchDto):Observable<ArticlePage>{
    let apiPath = ApiPathUtil.insertPageNumber(
      ArticleApi.search,
      pageNumber.toString(),
    )
    return this.httpClient.post<ArticlePage>(apiPath,articleSearchDto)
  }
}

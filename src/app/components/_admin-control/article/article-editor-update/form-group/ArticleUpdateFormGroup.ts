
import {FormControl, Validators} from "@angular/forms";

import {ArticleData} from "../../../../../domain/article/ArticleData";
import {ArticleDataControls} from "../../common/ArticleDataControls";
import {RequiredLanguages} from "../../../../../domain/RequiredLanguages";
import {ArticleUpdateDtoByAdmin} from "../../../../../domain/article/dto/ArticleUpdateDtoByAdmin";
import {GenericUpdateFormGroup} from "../../../../../_generic/form-group/GenericUpdateFormGroup";
import {ArticleStatusesAdmin} from "../../../../../domain/article/status/ArticleStatusesAdmin";
import {Category} from "../../../../../domain/category/Category";
import {ArticleFull} from "../../../../../domain/article/ArticleFull";
import {Journal} from "../../../../../domain/journal/Journal";




export class ArticleUpdateFormGroup
  extends GenericUpdateFormGroup<ArticleFull,ArticleData, ArticleDataControls, ArticleUpdateDtoByAdmin>
{
  requiredLangs: Array<string> = Object.values(RequiredLanguages)
  articleStatuses : Array<string> = Object.values(ArticleStatusesAdmin)

  journal= new FormControl<Journal | null>(null, Validators.required)
  category : Category | null = null
  wordFile: File | null = null
  pdfFile: File | null = null
  antiplagiat = new FormControl(null)
  pagesInJournal = new FormControl<string>("")
  status = new FormControl("",Validators.required)





  //For each language
  name: FormControl = new FormControl(null, Validators.required)
  annotation : FormControl = new FormControl(null, Validators.required)
  authors: Array<FormControl> = new Array<FormControl>()
  tags : FormControl = new FormControl(null, Validators.required)

  updateDto: ArticleUpdateDtoByAdmin = {
    id: null,
    antiplagiat: null,
    categoryId: null,
    dataList: new Array<ArticleData>(),
    journalId: null,
    pagesInJournal: null,
    status: "",
    pdfDocId: null,
    reviewerBlankDocId: null,
    wordDocId: null,
  }

  constructor() {
    super();
  }

  setDto(modelFull: ArticleFull): void {
    this.updateDto = {
      id: modelFull.id,
      antiplagiat: modelFull.antiplagiat,
      categoryId: modelFull.category?.id || null,
      dataList: modelFull.dataList,
      journalId: modelFull.journal.id,
      pagesInJournal: modelFull.pagesInJournal,
      status: modelFull.status,
      pdfDocId: modelFull.pdfDocId,
      reviewerBlankDocId: modelFull.reviewerBlankDocId,
      wordDocId: modelFull.wordDocId,
    }
    this.status.setValue(modelFull.status)
    this.journal.setValue(modelFull.journal)
    this.pagesInJournal.setValue(modelFull.pagesInJournal)
    //for each data in updateDto create its own controls
    this.updateDto.dataList.forEach((modelData)=>{
      //assign language and id of translatable data
      let articleDataControls = new ArticleDataControls(modelData.lang, modelData.id)

      //assign fields
      articleDataControls.name.setValue(modelData.name)
      articleDataControls.annotation.setValue(modelData.annotation)
      articleDataControls.tags.setValue(modelData.tags)

      modelData.authors.split('$').forEach((author)=>{
        articleDataControls.addAuthor(author)
      })

      this.dataControlsList.push(articleDataControls)

      //bind view to the first required language
      if(modelData.lang == this.requiredLangs[0]){
        this.setDataControls(articleDataControls)
      }
    })
  }
  addAuthor():void{
    this.dataControlsList.forEach((dataControls)=>{
      dataControls.addAuthor()
    })
  }
  removeAuthor(index:number):void{
    this.dataControlsList.forEach((dataControls)=>{
      dataControls.removeAuthor(index)
    })
  }

  //call if formGroup valid
  getDto(): ArticleUpdateDtoByAdmin {
    let articleUpdateDto:ArticleUpdateDtoByAdmin = {
      antiplagiat: this.antiplagiat.value,
      categoryId: this.category?.id || null,
      dataList: new Array<ArticleData>(),
      id: this.updateDto.id,
      journalId: this.journal.value?.id || 0,
      pagesInJournal: this.pagesInJournal.value,
      status: this.status.value || this.updateDto.status,
      pdfDocId: this.updateDto.pdfDocId,
      reviewerBlankDocId: this.updateDto.reviewerBlankDocId,
      wordDocId: this.updateDto.wordDocId,
    }
    console.log(articleUpdateDto)
    this.dataControlsList.forEach((data)=>{
      articleUpdateDto.dataList.push(data.getData())
    })

    return articleUpdateDto
  }

  onLangChange(lang: string): void {
    let modelDataControls = this.dataControlsList.find(data=>
      data.lang == lang
    )
    if(modelDataControls!=undefined){
      this.setDataControls(modelDataControls)
    }
  }



  valid(): boolean {
    return (
      this.journal.valid &&
        this.isDataControlsListValid()
    )
  }

  setDataControls(dataControls: ArticleDataControls){
    this.name = dataControls.name
    this.annotation = dataControls.annotation
    this.authors =dataControls.authors
    this.tags = dataControls.tags
  }


}

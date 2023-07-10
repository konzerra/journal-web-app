
import {FormControl, Validators} from "@angular/forms";
import {GenericSaveFormGroup} from "../../../../_generic/form-group/GenricSaveFormGroup";

import {ArticleDataControls} from "../../../../admin/article/_models/ArticleDataControls";
import {ArticleData} from "../../../../shared/models/article/ArticleData";
import {ArticleSaveDto} from "../../../../admin/article/_models/ArticleSaveDto";
import {RequiredLanguages} from "../../../../domain/RequiredLanguages";



export class UserPublishFormGroup
  extends GenericSaveFormGroup<ArticleData, ArticleDataControls, ArticleSaveDto>
{
  requiredLangs: Array<string> = Object.values(RequiredLanguages)

  journalId: FormControl = new FormControl(null, Validators.required)
  preferredCategory: FormControl<string | null> = new FormControl(null, Validators.required)
  pages: FormControl<Number | null> = new FormControl(null, Validators.required)
  wordFile: File | null = null
  userId : Number  = 0


  //For each language
  name: FormControl
  annotation : FormControl
  authors: Array<FormControl>
  tags : FormControl

  constructor() {
    super();
    this.requiredLangs.forEach((lang)=>{
      let articleDataControls = new ArticleDataControls(lang,null)
      //pushing default author
      articleDataControls.authors.push(new FormControl("", Validators.required))
      this.dataControlsList.push(articleDataControls)
    })

    this.name = this.dataControlsList[0].name
    this.annotation = this.dataControlsList[0].annotation
    this.authors = this.dataControlsList[0].authors
    this.tags = this.dataControlsList[0].tags
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
  getDto(): ArticleSaveDto {

    let articleSaveDto:ArticleSaveDto = {
      pages: this.pages.value || 0,
      preferredCategory: this.preferredCategory.value || "",
      ownerId: this.userId,
      journalId: this.journalId.value,
      dataList: new Array<ArticleData>()
    }
    this.dataControlsList.forEach((data)=>{
      articleSaveDto.dataList.push(data.getData())
    })

    return articleSaveDto
  }

  onLangChange(lang: string): void {
    let modelDataControls = this.dataControlsList.find(data=>
      data.lang == lang
    )
    if(modelDataControls!=undefined){
      this.name = modelDataControls.name
      this.annotation = modelDataControls.annotation
      this.authors = modelDataControls.authors
      this.tags = modelDataControls.tags
    }
  }

  valid(): boolean {
    return (
      this.journalId.valid &&
        this.wordFile != null &&
        this.preferredCategory.valid &&
        this.pages.valid &&
        this.userId != 0 &&
        this.isDataControlsListValid()
    )
  }

}

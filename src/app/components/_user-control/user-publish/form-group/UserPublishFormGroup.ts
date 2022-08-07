
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {GenericSaveFormGroup} from "../../../../_generic/form-group/GenricSaveFormGroup";
import {Category} from "../../../../domain/category/Category";
import {ArticleDataControls} from "../../../_admin-control/article/common/ArticleDataControls";
import {ArticleData} from "../../../../domain/article/ArticleData";
import {ArticleSaveDto} from "../../../../domain/article/dto/ArticleSaveDto";
import {RequiredLanguages} from "../../../../domain/RequiredLanguages";
import {CategoryDataControls} from "../../../_admin-control/category/_common/CategoryDataControls";
import {CategorySaveDto} from "../../../../domain/category/dto/CategorySaveDto";
import {CategoryData} from "../../../../domain/category/CategoryData";


export class UserPublishFormGroup
  extends GenericSaveFormGroup<ArticleData, ArticleDataControls, FormData>
{
  requiredLangs: Array<string> = Object.values(RequiredLanguages)

  journalId: FormControl = new FormControl(null, Validators.required)
  preferredCategory: FormControl<string | null> = new FormControl(null, Validators.required)
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
  getDto(): FormData {

    let articleSaveDto:ArticleSaveDto = {
      preferredCategory: this.preferredCategory.value || "",
      ownerId: this.userId,
      journalId: this.journalId.value,
      dataList: new Array<ArticleData>()
    }
    this.dataControlsList.forEach((data)=>{
      articleSaveDto.dataList.push(data.getData())
    })
    let formData = new FormData()
    formData.set('saveDto' , new Blob([JSON.stringify(articleSaveDto)],{
      type: "application/json"
    }))
    if(this.wordFile!=null){
      formData.append("file", new Blob([this.wordFile],{
        type: this.wordFile.type
      }))
    }
    return formData
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
        this.isDataControlsListValid()
    )
  }

}

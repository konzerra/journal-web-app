import {GenericSaveFormGroup} from "../../../_generic/form-group/GenricSaveFormGroup";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoryDataControls} from "../_models/CategoryDataControls";
import {CategorySaveDto} from "../../../domain/category/dto/CategorySaveDto";
import {CategoryData} from "../../../domain/category/CategoryData";
import {RequiredLanguages} from "../../../domain/RequiredLanguages";

export class CategorySaveForm
  extends GenericSaveFormGroup<CategoryData, CategoryDataControls, CategorySaveDto> {


  requiredLangs: Array<string> = Object.values(RequiredLanguages)


  //changes on lang changes
  name : FormControl
  overview:FormControl

  constructor() {
    super();
    this.requiredLangs.forEach((lang)=>{
      this.dataControlsList.push(new CategoryDataControls(lang))
    })
    this.name = this.dataControlsList[0].name
    this.overview = this.dataControlsList[0].overview
  }

  onLangChange(lang:string){
    let data = this.dataControlsList.find(data=>
      data.lang == lang
    )
    if(data!=undefined){
      this.name = data.name
      this.overview = data.overview
    }
  }

  getDto():CategorySaveDto{
    let categorySaveDto:CategorySaveDto = {
      dataList: new Array<CategoryData>()
    }
    this.dataControlsList.forEach((data)=>{
      categorySaveDto.dataList.push(data.getData())
    })

    return categorySaveDto
  }

  valid(): boolean {
    return this.isDataControlsListValid()
  }


}

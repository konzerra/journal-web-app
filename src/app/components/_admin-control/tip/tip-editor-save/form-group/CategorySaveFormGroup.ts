import {GenericSaveFormGroup} from "../../../../../_generic/form-group/GenricSaveFormGroup";
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {RequiredLanguages} from "../../../../../domain/RequiredLanguages";
import {CategoryData} from "../../../../../domain/category/CategoryData";
import {TipDataControls} from "../../_common/TipDataControls";
import {TipData} from "../../../../../domain/tip/TipData";
import {TipSaveDto} from "../../../../../domain/tip/dto/TipSaveDto";
import {CategorySaveDto} from "../../../../../domain/category/dto/CategorySaveDto";

export class TipSaveFormGroup
  extends GenericSaveFormGroup<TipData, TipDataControls, TipSaveDto> {


  requiredLangs: Array<string> = Object.values(RequiredLanguages)


  //changes on lang changes
  question : FormControl
  answer:FormControl

  constructor() {
    super();
    this.requiredLangs.forEach((lang)=>{
      this.dataControlsList.push(new TipDataControls(lang))
    })
    this.question = this.dataControlsList[0].question
    this.answer = this.dataControlsList[0].answer
  }

  onLangChange(lang:string){
    let data = this.dataControlsList.find(data=>
      data.lang == lang
    )
    if(data!=undefined){
      this.question = data.question
      this.answer = data.answer
    }
  }

  getDto():TipSaveDto{
    let tipSaveDto:TipSaveDto = {
      dataList: new Array<TipData>()
    }
    this.dataControlsList.forEach((data)=>{
      tipSaveDto.dataList.push(data.getData())
    })

    return tipSaveDto
  }

  valid(): boolean {
    return this.isDataControlsListValid()
  }


}

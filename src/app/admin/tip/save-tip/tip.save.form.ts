import {GenericSaveFormGroup} from "../../../_generic/form-group/GenricSaveFormGroup";
import {FormControl} from "@angular/forms";

import {RequiredLanguages} from "../../../domain/RequiredLanguages";

import {TipDataControls} from "../_models/TipDataControls";
import {TipData} from "../../../shared/models/tip/TipData";
import {TipSaveDto} from "../_models/TipSaveDto";


export class TipSaveForm
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

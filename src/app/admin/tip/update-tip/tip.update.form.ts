import {GenericUpdateFormGroup} from "../../../_generic/form-group/GenericUpdateFormGroup";
import {RequiredLanguages} from "../../../domain/RequiredLanguages";
import {FormControl,  Validators} from "@angular/forms";
import {TipFull} from "../../../shared/models/tip/TipFull";
import {TipData} from "../../../shared/models/tip/TipData";
import {TipDataControls} from "../_models/TipDataControls";
import {TipUpdateDto} from "../_models/TipUpdateDto";

export class TipUpdateForm
  extends GenericUpdateFormGroup<TipFull, TipData, TipDataControls, TipUpdateDto>
{

  requiredLangs: Array<string> = Object.values(RequiredLanguages)

  //changes on lang changed
  question : FormControl = new FormControl("", Validators.required)
  answer : FormControl = new FormControl("", Validators.required)

  updateDto!:TipUpdateDto

  constructor() {
    super();
  }

  valid(): boolean {
    return this.isDataControlsListValid()
  }

  setDto(modelFull:TipFull){
    this.updateDto = modelFull
    //for each data in updateDto create its own controls
    this.updateDto.dataList.forEach((modelData)=>{
      let tipDataControls = new TipDataControls(modelData.lang, modelData.id)
      tipDataControls.question.setValue(modelData.question)
      tipDataControls.answer.setValue(modelData.answer)
      this.dataControlsList.push(tipDataControls)

      if(modelData.lang == this.requiredLangs[0]){
        this.question = tipDataControls.question
        this.answer =  tipDataControls.answer
      }
    })

  }

  getDto(): TipUpdateDto{
    let tipUpdateDto: TipUpdateDto = {
      id: this.updateDto.id,
      dataList: new Array<TipData>()
    }
    this.dataControlsList.forEach((data)=>{
      tipUpdateDto.dataList.push(data.getData())
    })
    return tipUpdateDto
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




}

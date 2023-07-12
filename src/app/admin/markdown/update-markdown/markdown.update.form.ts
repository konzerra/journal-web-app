import {GenericUpdateFormGroup} from "../../../_generic/form-group/GenericUpdateFormGroup";
import {RequiredLanguages} from "../../../domain/RequiredLanguages";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MarkdownData} from "../../../shared/models/markdown/MarkdownData";
import { MarkdownDataControls } from "../_models/MarkdownDataControls";
import {MarkdownUpdateDto} from "../../../domain/markdown/dto/MarkdownUpdateDto";
import {MarkdownFull} from "../../../shared/models/markdown/MarkdownFull";

export class MarkdownUpdateForm
  extends GenericUpdateFormGroup<MarkdownFull, MarkdownData, MarkdownDataControls, MarkdownUpdateDto>
{

  requiredLangs: Array<string> = Object.values(RequiredLanguages)

  //changes on lang changed
  name : FormControl = new FormControl("", Validators.required)
  source : FormControl = new FormControl("", Validators.required)

  updateDto!:MarkdownUpdateDto

  constructor() {
    super();
  }

  valid(): boolean {
    return this.isDataControlsListValid()
  }

  setDto(modelFull:MarkdownFull){
    this.updateDto = modelFull
    console.log(modelFull)
    //for each data in updateDto create its own controls
    this.updateDto.dataList.forEach((modelData)=>{
      let markdownDataControls = new MarkdownDataControls(modelData.lang, modelData.id)

      markdownDataControls.name.setValue(modelData.name)
      markdownDataControls.source.setValue(modelData.source)
      this.dataControlsList.push(markdownDataControls)

      if(modelData.lang == this.requiredLangs[0]){
        this.name = markdownDataControls.name
        this.source =  markdownDataControls.source
      }
    })

  }

  getDto():MarkdownUpdateDto{
    let markdownUpdateDto:MarkdownUpdateDto = {
      id: this.updateDto.id,
      dataList: new Array<MarkdownData>()
    }
    this.dataControlsList.forEach((data)=>{
      markdownUpdateDto.dataList.push(data.getData())
    })
    return markdownUpdateDto
  }

  onLangChange(lang:string){

    let data = this.dataControlsList.find(data=>
      data.lang == lang
    )
    if(data!=undefined){
      this.name = data.name
      this.source = data.source
    }
  }

}

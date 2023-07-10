import {GenericSaveFormGroup} from "../../../_generic/form-group/GenricSaveFormGroup";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RequiredLanguages} from "../../../domain/RequiredLanguages";
import {MarkdownData} from "../../../domain/markdown/MarkdownData";
import {MarkdownSaveDto} from "../../../domain/markdown/dto/MarkdownSaveDto";
import {MarkdownDataControls} from "../_models/MarkdownDataControls";

export class MarkdownSaveForm
  extends GenericSaveFormGroup<MarkdownData, MarkdownDataControls, MarkdownSaveDto> {


  requiredLangs: Array<string> = Object.values(RequiredLanguages)

  id:FormControl<string | null> = new FormControl<string | null>(null,Validators.required)

  //changes on lang changes
  name : FormControl
  source : FormControl


  constructor() {
    super();
    this.requiredLangs.forEach((lang)=>{
      this.dataControlsList.push(new MarkdownDataControls(lang))
    })
    this.source = this.dataControlsList[0].source
    this.name = this.dataControlsList[0].name
  }

  onLangChange(lang:string){

    let data = this.dataControlsList.find(data=>
      data.lang == lang
    )
    console.log(data)
    if(data!=undefined){
      this.name = data.name
      this.source = data.source
    }
  }

  getDto():MarkdownSaveDto{
    let markdownSaveDto:MarkdownSaveDto = {
      id: this.id.value || "",
      dataList: new Array<MarkdownData>()
    }
    this.dataControlsList.forEach((data)=>{
      markdownSaveDto.dataList.push(data.getData())
    })

    return markdownSaveDto
  }

  valid(): boolean {
    return this.isDataControlsListValid() && this.id.valid
  }


}

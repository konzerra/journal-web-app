import {GenericSaveFormGroup} from "../../../../../_generic/form-group/GenricSaveFormGroup";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RequiredLanguages} from "../../../../../domain/RequiredLanguages";
import {MarkdownData} from "../../../../../domain/Markdown/MarkdownData";
import {MarkdownSaveDto} from "../../../../../domain/Markdown/dto/MarkdownSaveDto";
import {MarkdownDataControls} from "../../common/MarkdownDataControls";
import {Markdown} from "../../../../../domain/Markdown/Markdown";
import {AppMarkdownPages} from "../../../../../AppMarkdownPages";

export class MarkdownSaveFormGroup
  extends GenericSaveFormGroup<MarkdownData, MarkdownDataControls, MarkdownSaveDto> {


  requiredLangs: Array<string> = Object.values(RequiredLanguages)

  //changes on lang changes
  name : FormControl = new FormControl("", Validators.required)
  source : FormControl

  pageMarkdowns = Object.values(AppMarkdownPages)
  constructor() {
    super();
    this.requiredLangs.forEach((lang)=>{
      this.dataControlsList.push(new MarkdownDataControls(lang))
    })
    this.source = this.dataControlsList[0].source
  }

  onLangChange(lang:string){

    let data = this.dataControlsList.find(data=>
      data.lang == lang
    )
    console.log(data)
    if(data!=undefined){
      this.source = data.source
    }
  }

  getDto():MarkdownSaveDto{
    let markdownSaveDto:MarkdownSaveDto = {
      name: this.name.value,
      dataList: new Array<MarkdownData>()
    }
    this.dataControlsList.forEach((data)=>{
      markdownSaveDto.dataList.push(data.getData())
    })

    return markdownSaveDto
  }

  valid(): boolean {
    return this.isDataControlsListValid()
  }


}

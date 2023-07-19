import {GenericSaveFormGroup} from "../../../_generic/form-group/GenricSaveFormGroup";
import {FormControl, Validators} from "@angular/forms";
import {JournalSaveDto} from "../_models/JournalSaveDto";
import {JournalData} from "../../../domain/journal/JournalData";
import {RequiredLanguages} from "../../../domain/RequiredLanguages";
import {JournalDataControls} from "../_models/JournalDataControls";

export class JournalSaveForm extends GenericSaveFormGroup<JournalData, JournalDataControls, JournalSaveDto> {
  requiredLangs: Array<string> = Object.values(RequiredLanguages)

  name : FormControl
  version:FormControl
  image:File | null = null
  localImageURL: string | null = null;

  constructor() {
    super();
    this.requiredLangs.forEach((item)=>{
      this.dataControlsList.push( new JournalDataControls(item))
    })
    this.name = this.dataControlsList[0].name
    this.version = this.dataControlsList[0].version
  }

  valid(): boolean {
   return this.isDataControlsListValid() &&
     this.image != null
  }

  onLangChange(lang:string){
    let data = this.dataControlsList.find(data=>
      data.lang == lang
    )
    if(data!=undefined){
      this.name = data.name
      this.version = data.version
      console.log(this.name.value)
    }
  }

  getDto():JournalSaveDto{
    if(this.image == null){
      throw("Фото не прикреплено")
    }
    let journalSaveDto:JournalSaveDto = {
      dataList: new Array<JournalData>()
    }
    this.dataControlsList.forEach((data)=>{
      journalSaveDto.dataList.push(data.getData())
    })
    return journalSaveDto
  }


}



import {GenericSaveFormGroup} from "../../../../../_generic/form-group/GenricSaveFormGroup";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {JournalSaveDto} from "../../../../../domain/journal/dto/JournalSaveDto";
import {JournalData} from "../../../../../domain/journal/JournalData";
import {RequiredLanguages} from "../../../../../domain/RequiredLanguages";
import {JournalDataControls} from "../../common/JournalDataControls";

export class JournalSaveFormGroup extends GenericSaveFormGroup<JournalData, JournalDataControls, JournalSaveDto> {
  requiredLangs: Array<string> = Object.values(RequiredLanguages)

  name : FormControl
  version:FormControl
  image:File | null = null

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
      image: "",
      dataList: new Array<JournalData>()
    }
    this.dataControlsList.forEach((data)=>{
      journalSaveDto.dataList.push(data.getData())
    })
    return journalSaveDto
  }


}



import {RequiredLanguages} from "../../../../../domain/RequiredLanguages";
import {JournalDataControls} from "../../common/JournalDataControls";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {JournalData} from "../../../../../domain/journal/JournalData";
import {JournalUpdateDto} from "../../../../../domain/journal/dto/JournalUpdateDto";
import {JournalStatus} from "../../../../../domain/journal/JournalStatus";
import {GenericUpdateFormGroup} from "../../../../../_generic/form-group/GenericUpdateFormGroup";

export class JournalUpdateFormGroup
  extends GenericUpdateFormGroup<JournalData, JournalDataControls, JournalUpdateDto>
{
  valid(): boolean {
      return (
        this.status.valid &&
          this.isDataControlsListValid()
      )
  }
  requiredLangs: Array<string> = Object.values(RequiredLanguages)
  journalStatuses : Array<string> = Object.values(JournalStatus)

  //changes on lang changed
  name : FormControl = new FormControl("", Validators.required)
  version : FormControl = new FormControl("", Validators.required)

  status : FormControl = new FormControl("", Validators.required)

  updateDto!:JournalUpdateDto

  constructor() {
    super();
  }

  setDto(updateDto:JournalUpdateDto){
    this.updateDto = updateDto
    this.status.setValue(updateDto.status)
    //for each data in updateDto create its own controls
    this.updateDto.dataList.forEach((data)=>{
      let journalDataControls = new JournalDataControls(data.lang, data.id)
      journalDataControls.name.setValue(data.name)
      journalDataControls.version.setValue(data.version)
      this.dataControlsList.push(journalDataControls)

      if(data.lang == this.requiredLangs[0]){
        this.name = journalDataControls.name
        this.version =  journalDataControls.version
      }
    })

  }

  getDto():JournalUpdateDto{
    let journalUpdateDto:JournalUpdateDto = {
      id: this.updateDto.id,
      status: this.status.value,
      dataList: new Array<JournalData>()
    }
    this.dataControlsList.forEach((data)=>{
      journalUpdateDto.dataList.push(data.getData())
    })
    return journalUpdateDto
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




}

import {ModelI} from "../../model/ModelI";
import {SaveDtoI} from "../../model/SaveDtoI";
import {GenericSaveFormGroup} from "../../form-group/GenricSaveFormGroup";
import {UseCaseSaveAbstract} from "../../usecase/UseCaseSaveAbstract";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../util/genericCheckFormControl";
import {DataControlsAbstract} from "../../form-group/DataControlsAbstract";
import {Router} from "@angular/router";
import {JournalSaveDto} from "../../../domain/journal/dto/JournalSaveDto";
import {DialogsService} from "../../../components/common/dialogs/dialogs.service";


export abstract class GenericModelEditorSaveComponent<
  ModelData extends ModelI,
  DataControls extends DataControlsAbstract<ModelData>,
  SaveDto extends SaveDtoI
  >{

  protected abstract router:Router
  protected abstract saveUseCase:UseCaseSaveAbstract<SaveDto>
  protected abstract dialogsService:DialogsService

  abstract formGroup:GenericSaveFormGroup<
    ModelData,
    DataControls,
    SaveDto
    >
  abstract selectedRadioButton : string

  saveDisabled: boolean = false;
  protected constructor() {}

  onSubmit() {
    this.saveDisabled = true
    if (this.formGroup.valid()) {
      const saveDto:SaveDto = this.formGroup.getDto()
      this.saveUseCase.execute(saveDto).subscribe({
        next:(value) =>{

        },
        error:(error)=>{
          this.saveDisabled = false
          alert(error)
        },
        complete:()=>{
          this.dialogsService.openInfoDialog("сохранено")
          this.saveDisabled = false
          this.onSuccessfulSave()
        }
      })
    }else{
      this.saveDisabled = false
      this.dialogsService.openInfoDialog("Не все данные введены")
    }
  }

  onLangChange(lang:string) {
    this.selectedRadioButton = lang
    this.formGroup.onLangChange(lang)
  }


  checkFormControl(formControl:FormControl):boolean{
    return genericCheckFormControl(formControl)
  }

  abstract onSuccessfulSave():void
}

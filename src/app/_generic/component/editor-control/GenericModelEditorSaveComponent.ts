import {ModelI} from "../../model/ModelI";
import {SaveDtoI} from "../../model/SaveDtoI";
import {GenericSaveFormGroup} from "../../form-group/GenricSaveFormGroup";
import {UseCaseSaveAbstract} from "../../usecase/UseCaseSaveAbstract";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../util/genericCheckFormControl";


export abstract class GenericModelEditorSaveComponent<Model extends ModelI, SaveDto extends SaveDtoI>{
  protected constructor(
    protected saveUseCase:UseCaseSaveAbstract<SaveDto>
  ) {
  }

  abstract formGroup:GenericSaveFormGroup
  onSubmit() {
    if (this.formGroup.formGroup.valid) {
      const saveDto:SaveDto = this.formGroup.formGroup.value
      console.log(saveDto)
      this.saveUseCase.execute(saveDto).subscribe({
        next:(value) =>{

        },
        error:(error)=>{
          alert(error)
        },
        complete:()=>{
          alert('Сохранено')
          this.formGroup.formGroup.reset()
        }
      })
    }
  }
  checkFormControl(formControl:FormControl):boolean{
    return genericCheckFormControl(formControl)
  }

  abstract onSuccessfulSave():void
}

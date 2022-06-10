import {FormControl} from "@angular/forms";
import {UseCaseUpdateAbstract} from "../../usecase/UseCaseUpdateAbstract";
import {ActivatedRoute} from "@angular/router";
import {GenericUpdateFormGroup} from "../../form-group/GenericUpdateFormGroup";
import {ModelI} from "../../model/ModelI";
import {UpdateDtoI} from "../../model/UpdateDtoI";
import {genericCheckFormControl} from "../../util/genericCheckFormControl";
import {CategoryUseCaseFindByIdForUpdate} from "../../../domain/category/usecase/CategoryUseCaseFindByIdForUpdate";
import {UseCaseFindByIdAbstract} from "../../usecase/UseCaseFindByIdAbstract";

export abstract class GenericModelEditorUpdateComponent<Model extends ModelI, UpdateDto extends UpdateDtoI>{
  protected constructor(
    protected useCaseUpdate:UseCaseUpdateAbstract<UpdateDto>,
    protected useCaseFindById: UseCaseFindByIdAbstract<Model, UpdateDto>,
    protected route: ActivatedRoute
  ) {

  }
  abstract formGroup:GenericUpdateFormGroup<Model,UpdateDto>
  abstract onSuccessfulUpdate():void

  abstractOnInit(): void {
    this.route.queryParams.subscribe({
        next:(param) =>{
          this.useCaseFindById.execute(JSON.parse(  param["model"])).subscribe({
            next:(updateDto) =>{
              this.formGroup.setUpdateDto(updateDto)
            }
          })
        }
      }
    )
  }
  onSubmit() {
    if (this.formGroup.formGroup.valid) {
      this.useCaseUpdate.execute(this.formGroup.getUpdateDto()).subscribe({
        next:(value) =>{

        },
        error:(error)=>{
          alert(error)
        },
        complete:()=>{
          alert('Обновлено')
          this.formGroup.formGroup.reset()
          this.onSuccessfulUpdate()
        }
      })
    }
  }


  checkFormControl(formControl:FormControl):boolean{
    return genericCheckFormControl(formControl)
  }
}

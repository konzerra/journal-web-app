import {FormControl} from "@angular/forms";
import {UseCaseUpdateAbstract} from "../../usecase/UseCaseUpdateAbstract";
import {ActivatedRoute, Router} from "@angular/router";
import {GenericUpdateFormGroup} from "../../form-group/GenericUpdateFormGroup";
import {ModelI} from "../../model/ModelI";
import {genericCheckFormControl} from "../../util/genericCheckFormControl";
import {UseCaseGetByIdFullAbstract} from "../../usecase/get/UseCaseGetByIdFullAbstract";
import {DataControlsAbstract} from "../../form-group/DataControlsAbstract";


export abstract class GenericModelEditorUpdateComponent<
  ModelData extends ModelI,
  ModelDataControls extends DataControlsAbstract<ModelData>,
  UpdateDto
  >
{

  protected abstract useCaseUpdate:UseCaseUpdateAbstract<UpdateDto>
  protected abstract useCaseFindByIdFull: UseCaseGetByIdFullAbstract<UpdateDto>

  protected abstract route: ActivatedRoute

  abstract formGroup:GenericUpdateFormGroup<ModelData,ModelDataControls,UpdateDto>

  protected constructor() {}

  abstractOnInit(): void {
    this.route.queryParams.subscribe({
        next:(param) =>{
          this.useCaseFindByIdFull.execute(param["id"]).subscribe({
            next:(v)=>{
              this.formGroup.setDto(v)
            },
            error:(err) =>{

            }
          })
        }
      }
    )
  }
  onSubmit() {
    if (this.formGroup.valid()) {
      const updateDto:UpdateDto = this.formGroup.getDto()
      console.log(updateDto)
      this.useCaseUpdate.execute(updateDto).subscribe({
        next:(value) =>{

        },
        error:(error)=>{
          alert(error)
        },
        complete:()=>{
          alert('Сохранено')
          this.onSuccessfulUpdate()
        }
      })
    }else{
      alert("Не все данные введены")
    }
  }

  onLangChange(lang: string) {
    this.formGroup.onLangChange(lang)
  }

  checkFormControl(name: FormControl):boolean {
    return genericCheckFormControl(name)
  }

  protected abstract onSuccessfulUpdate():void

  abstract onCancelClicked() : void

}

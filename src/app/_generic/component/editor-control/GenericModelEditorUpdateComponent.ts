import {FormControl} from "@angular/forms";
import {UseCaseUpdateAbstract} from "../../usecase/UseCaseUpdateAbstract";
import {ActivatedRoute, Router} from "@angular/router";
import {GenericUpdateFormGroup} from "../../form-group/GenericUpdateFormGroup";
import {ModelI} from "../../model/ModelI";
import {genericCheckFormControl} from "../../util/genericCheckFormControl";
import {UseCaseGetByIdFullAbstract} from "../../usecase/get/UseCaseGetByIdFullAbstract";
import {DataControlsAbstract} from "../../form-group/DataControlsAbstract";
import {DialogsService} from "../../../components/common/dialogs/dialogs.service";


export abstract class GenericModelEditorUpdateComponent<
  ModelFull extends ModelI,
  ModelData extends ModelI,
  ModelDataControls extends DataControlsAbstract<ModelData>,
  UpdateDto
  >
{

  protected abstract useCaseUpdate:UseCaseUpdateAbstract<UpdateDto>
  protected abstract useCaseFindByIdFull: UseCaseGetByIdFullAbstract<ModelFull>
  protected abstract dialogsService: DialogsService

  protected abstract route: ActivatedRoute

  abstract formGroup:GenericUpdateFormGroup<ModelFull,ModelData,ModelDataControls,UpdateDto>
  updateDisabled: boolean = false;

  protected constructor(

  ) {}

  abstractOnInit(): void {
    this.route.queryParams.subscribe({
        next:(param) =>{
          this.useCaseFindByIdFull.execute(JSON.parse(param["id"])).subscribe({
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
    this.updateDisabled = true
    if (this.formGroup.valid()) {
      const updateDto:UpdateDto = this.formGroup.getDto()
      this.useCaseUpdate.execute(updateDto).subscribe({
        next:(value) =>{

        },
        error:(error)=>{
          this.dialogsService.openInfoDialog(error)
          this.updateDisabled = false
        },
        complete:()=>{
          this.dialogsService.openInfoDialog('Обновлено')
          this.updateDisabled = false
          this.onSuccessfulUpdate()
        }
      })
    }else{
      this.updateDisabled = false
      this.dialogsService.openInfoDialog("Не все данные введены")
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

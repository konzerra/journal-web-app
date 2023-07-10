import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ComponentRoutingPaths} from "../../../ComponentRoutingPaths";
import {TipUpdateDto} from "../../../../domain/tip/dto/TipUpdateDto";
import {TipUpdateFormGroup} from "./form-group/TipUpdateFormGroup";
import {DialogsService} from "../../../../shared/dialogs/dialogs.service";
import {FormControl} from "@angular/forms";
import {TipService} from "../../../../domain/tip/tip.service";
import {genericCheckFormControl} from "../../../../_generic/util/genericCheckFormControl";

@Component({
  selector: 'app-tip-editor-update',
  templateUrl: './tip-editor-update.component.html',
  styleUrls: ['./tip-editor-update.component.css']
})
export class TipEditorUpdateComponent
  implements OnInit {
  formGroup = new TipUpdateFormGroup()
  selectedRadioButton = this.formGroup.requiredLangs[0]
  updateDisabled: boolean = false;

  constructor(
    protected route: ActivatedRoute,
    private tipService: TipService,
    private router:Router,
    protected dialogsService: DialogsService
  ) {

  }




  ngOnInit(): void {
    this.route.queryParams.subscribe({
        next:(param) =>{
          this.tipService.getByIdFull(param["id"]).subscribe({
            next:(v)=>{
              this.formGroup.setDto(v)
            },
            error:(err) =>{
              this.router.navigate([ComponentRoutingPaths.adminControl.tip.main])
              this.dialogsService.openInfoDialog(err)
            }
          })
        }
      }
    )

  }

  onSubmit() {
    this.updateDisabled = true
    if (this.formGroup.valid()) {
      const updateDto:TipUpdateDto = this.formGroup.getDto()
      this.tipService.update(updateDto).subscribe({
        next:(value) =>{

        },
        error:(error)=>{
          this.dialogsService.openInfoDialog(error)
          this.updateDisabled = false
        },
        complete:()=>{
          this.dialogsService.openInfoDialog('Обновлено')
          this.updateDisabled = false
          this.router.navigate([ComponentRoutingPaths.adminControl.tip.main])
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

  checkFormControl(name: FormControl): boolean {
    return genericCheckFormControl(name)
  }

  onCancelClicked() {
    this.router.navigate([ComponentRoutingPaths.adminControl.tip.main])
  }

}

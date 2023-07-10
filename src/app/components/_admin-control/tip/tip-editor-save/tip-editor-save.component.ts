import { Component, OnInit } from '@angular/core';
import {DialogsService} from "../../../common/dialogs/dialogs.service";
import {Router} from "@angular/router";
import {ComponentRoutingPaths} from "../../../ComponentRoutingPaths";
import {TipSaveDto} from "../../../../domain/tip/dto/TipSaveDto";
import {TipSaveFormGroup} from "./form-group/CategorySaveFormGroup";
import {TipService} from "../../../../domain/tip/tip.service";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../../../_generic/util/genericCheckFormControl";

@Component({
  selector: 'app-tip-editor-save',
  templateUrl: './tip-editor-save.component.html',
  styleUrls: ['./tip-editor-save.component.css']
})
export class TipEditorSaveComponent
  implements OnInit {

  formGroup = new TipSaveFormGroup();
  selectedRadioButton = this.formGroup.requiredLangs[0]
  saveDisabled =  false;

  constructor(
    protected dialogsService: DialogsService,
    protected router:Router,
    private tipService:TipService
  ) {
  }

  ngOnInit(): void {

  }

  onCancelClicked() {
    this.router.navigate([ComponentRoutingPaths.adminControl.tip.main])
  }

  onSubmit() {
    this.saveDisabled = true
    if (this.formGroup.valid()) {
      const saveDto:TipSaveDto = this.formGroup.getDto()
      this.tipService.save(saveDto).subscribe({
        next:(value) =>{

        },
        error:(error)=>{
          this.saveDisabled = false
          alert(error)
        },
        complete:()=>{
          this.dialogsService.openInfoDialog("сохранено")
          this.saveDisabled = false
          this.router.navigate([ComponentRoutingPaths.adminControl.tip.main])
        }
      })
    }else{
      this.saveDisabled = false
      this.dialogsService.openInfoDialog("Не все данные введены")
    }
  }

  onLangChange(lang: string) {
    this.selectedRadioButton = lang
    this.formGroup.onLangChange(lang)
  }

  checkFormControl(formControl: FormControl): boolean {
    return genericCheckFormControl(formControl)
  }

}

import {Component, OnInit} from '@angular/core';
import {TipSaveForm} from "./tip.save.form";
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {Router} from "@angular/router";
import {TipService} from "../../../domain/tip/tip.service";
import {ComponentRoutingPaths} from "../../../ComponentRoutingPaths";
import {TipSaveDto} from "../_models/TipSaveDto";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../../_generic/util/genericCheckFormControl";
import {AdminTipRoutes} from "../admin.tip.routes";

@Component({
  selector: 'app-save-tip',
  templateUrl: './save-tip.component.html',
  styleUrls: ['./save-tip.component.css']
})
export class SaveTipComponent implements OnInit {

  formGroup = new TipSaveForm();
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
    this.router.navigate([AdminTipRoutes.manage])
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
          this.dialogsService.openInfoDialog(error)
        },
        complete:()=>{
          this.dialogsService.openInfoDialog("сохранено")
          this.saveDisabled = false
          this.router.navigate([AdminTipRoutes.manage])
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

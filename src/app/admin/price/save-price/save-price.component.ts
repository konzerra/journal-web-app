import {Component, OnInit} from '@angular/core';
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {Router} from "@angular/router";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../../_generic/util/genericCheckFormControl";
import {PriceSaveForm} from "./price.save.form";
import {PriceService} from "../../../shared/services/price.service";
import {AdminPriceRoutes} from "../admin.price.routes";
import {PriceSaveDto} from "../_models/PriceSaveDto";

@Component({
  selector: 'app-save-price',
  templateUrl: './save-price.component.html',
  styleUrls: ['./save-price.component.css']
})
export class SavePriceComponent implements OnInit {

  formGroup = new PriceSaveForm();
  selectedRadioButton = this.formGroup.requiredLangs[0]
  saveDisabled =  false;

  constructor(
    protected dialogsService: DialogsService,
    protected router:Router,
    private priceService:PriceService
  ) {
  }

  ngOnInit(): void {

  }

  onCancelClicked() {
    this.router.navigate([AdminPriceRoutes.manage])
  }

  onSubmit() {
    this.saveDisabled = true
    if (this.formGroup.valid()) {
      const saveDto:PriceSaveDto = this.formGroup.getDto()
      this.priceService.save(saveDto).subscribe({
        next:(value) =>{

        },
        error:(error)=>{
          this.saveDisabled = false
          this.dialogsService.openInfoDialog(error)
        },
        complete:()=>{
          this.dialogsService.openInfoDialog("сохранено")
          this.saveDisabled = false
          this.router.navigate([AdminPriceRoutes.manage])
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

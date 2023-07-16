import {Component, OnInit} from '@angular/core';
import {TipUpdateForm} from "../../tip/update-tip/tip.update.form";
import {ActivatedRoute, Router} from "@angular/router";
import {TipService} from "../../../shared/services/tip.service";
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {ComponentRoutingPaths} from "../../../ComponentRoutingPaths";
import {TipUpdateDto} from "../../tip/_models/TipUpdateDto";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../../_generic/util/genericCheckFormControl";
import {PriceUpdateForm} from "./price.update.form";
import {PriceService} from "../../../shared/services/price.service";
import {AdminPriceRoutes} from "../admin.price.routes";
import {PriceUpdateDto} from "../_models/PriceUpdateDto";

@Component({
  selector: 'app-update-price',
  templateUrl: './update-price.component.html',
  styleUrls: ['./update-price.component.css']
})
export class UpdatePriceComponent implements OnInit {
  form = new PriceUpdateForm()
  selectedRadioButton = this.form.requiredLangs[0]
  updateDisabled: boolean = false;

  constructor(
    protected route: ActivatedRoute,
    private priceService: PriceService,
    private router:Router,
    protected dialogsService: DialogsService
  ) {

  }




  ngOnInit(): void {
    this.route.queryParams.subscribe({
        next:(param) =>{
          this.priceService.getByIdFull(param["id"]).subscribe({
            next:(v)=>{
              this.form.setDto(v)
            },
            error:(err) =>{
              this.router.navigate([AdminPriceRoutes.manage])
              this.dialogsService.openInfoDialog(err)
            }
          })
        }
      }
    )

  }

  onSubmit() {
    this.updateDisabled = true
    if (this.form.valid()) {
      const updateDto:PriceUpdateDto = this.form.getDto()
      this.priceService.update(updateDto).subscribe({
        next:(value) =>{

        },
        error:(error)=>{
          this.dialogsService.openInfoDialog(error)
          this.updateDisabled = false
        },
        complete:()=>{
          this.dialogsService.openInfoDialog('Обновлено')
          this.updateDisabled = false
          this.router.navigate([AdminPriceRoutes.manage])
        }
      })
    }else{
      this.updateDisabled = false
      this.dialogsService.openInfoDialog("Не все данные введены")
    }
  }

  onLangChange(lang: string) {
    this.form.onLangChange(lang)
  }

  checkFormControl(name: FormControl): boolean {
    return genericCheckFormControl(name)
  }

  onCancelClicked() {
    this.router.navigate([AdminPriceRoutes.manage])
  }
}

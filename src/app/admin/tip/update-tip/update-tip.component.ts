import {Component, OnInit} from '@angular/core';
import {TipUpdateForm} from "./tip.update.form";
import {ActivatedRoute, Router} from "@angular/router";
import {AdminTipService} from "../admin.tip.service";
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {ComponentRoutingPaths} from "../../../ComponentRoutingPaths";
import {TipUpdateDto} from "../../../domain/tip/dto/TipUpdateDto";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../../_generic/util/genericCheckFormControl";

@Component({
  selector: 'app-update-tip',
  templateUrl: './update-tip.component.html',
  styleUrls: ['./update-tip.component.css']
})
export class UpdateTipComponent implements OnInit {
  form = new TipUpdateForm()
  selectedRadioButton = this.form.requiredLangs[0]
  updateDisabled: boolean = false;

  constructor(
    protected route: ActivatedRoute,
    private tipService: AdminTipService,
    private router:Router,
    protected dialogsService: DialogsService
  ) {

  }




  ngOnInit(): void {
    this.route.queryParams.subscribe({
        next:(param) =>{
          this.tipService.getByIdFull(param["id"]).subscribe({
            next:(v)=>{
              this.form.setDto(v)
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
    if (this.form.valid()) {
      const updateDto:TipUpdateDto = this.form.getDto()
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
    this.form.onLangChange(lang)
  }

  checkFormControl(name: FormControl): boolean {
    return genericCheckFormControl(name)
  }

  onCancelClicked() {
    this.router.navigate([ComponentRoutingPaths.adminControl.tip.main])
  }
}

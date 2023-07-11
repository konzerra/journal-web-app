import {Component, OnInit} from '@angular/core';
import {MarkdownUpdateForm} from "./markdown.update.form";
import {ActivatedRoute, Router} from "@angular/router";
import {MarkdownService} from "../../../domain/markdown/markdown.service";
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {ComponentRoutingPaths} from "../../../ComponentRoutingPaths";
import {MarkdownUpdateDto} from "../../../domain/markdown/dto/MarkdownUpdateDto";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../../_generic/util/genericCheckFormControl";

@Component({
  selector: 'app-update-markdown',
  templateUrl: './update-markdown.component.html',
  styleUrls: ['./update-markdown.component.css']
})
export class UpdateMarkdownComponent implements OnInit {

  formGroup = new MarkdownUpdateForm()
  selectedRadioButton = this.formGroup.requiredLangs[0]
  updateDisabled: boolean = false;

  constructor(
    protected route: ActivatedRoute,
    private markdownService: MarkdownService,
    private router:Router,
    protected dialogsService: DialogsService
  ) {

  }




  ngOnInit(): void {
    this.route.queryParams.subscribe({
        next:(param) =>{
          this.markdownService.getByIdFull(param["id"]).subscribe({
            next:(v)=>{
              this.formGroup.setDto(v)
            },
            error:(err) =>{
              this.router.navigate([ComponentRoutingPaths.adminControl.markdown.main])
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
      const updateDto: MarkdownUpdateDto = this.formGroup.getDto()
      this.markdownService.update(updateDto).subscribe({
        next:(value) =>{

        },
        error:(error)=>{
          this.dialogsService.openInfoDialog(error)
          this.updateDisabled = false
        },
        complete:()=>{
          this.dialogsService.openInfoDialog('Обновлено')
          this.updateDisabled = false
          this.router.navigate([ComponentRoutingPaths.adminControl.markdown.main])
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
    this.router.navigate([ComponentRoutingPaths.adminControl.markdown.main])
  }

}

import { Component, OnInit } from '@angular/core';
import {
  GenericModelEditorSaveComponent
} from "../../../../_generic/component/editor-control/GenericModelEditorSaveComponent";
import {JournalSaveDto} from "../../../../domain/journal/dto/JournalSaveDto";
import {JournalSaveFormGroup} from "./form-group/JournalSaveFormGroup";
import {JournalUseCaseSave} from "../../../../domain/journal/usecase/JournalUseCaseSave";
import {Router} from "@angular/router";
import {ComponentRoutingPaths} from "../../../ComponentRoutingPaths";
import {JournalData} from "../../../../domain/journal/JournalData";
import {JournalDataControls} from "../common/JournalDataControls";
import { DialogsService } from 'src/app/components/common/dialogs/dialogs.service';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-journal-editor-save',
  templateUrl: './journal-editor-save.component.html',
  styleUrls: ['./journal-editor-save.component.css']
})
export class JournalEditorSaveComponent
  extends GenericModelEditorSaveComponent<
    JournalData,
    JournalDataControls,
    JournalSaveDto>
  implements OnInit {

  formGroup = new JournalSaveFormGroup();
  selectedRadioButton = this.formGroup.requiredLangs[0]

  constructor(
    protected dialogsService: DialogsService,
    protected router:Router,
    override saveUseCase: JournalUseCaseSave,
    private sanitizer:DomSanitizer
  ) {
    super();
  }

  ngOnInit(): void {

  }

  onSuccessfulSave(): void {
    this.router.navigate([ComponentRoutingPaths.adminControl.journal.main])
  }

  onCancelClicked() {
    this.router.navigate([ComponentRoutingPaths.adminControl.journal.main])
  }
  override onSubmit() {
    console.log(this.formGroup.image)
    this.saveDisabled = true
    if (this.formGroup.valid() && this.formGroup.image!=null) {
      const saveDto:JournalSaveDto = this.formGroup.getDto()
      let reader = new FileReader()
      reader.readAsDataURL(this.formGroup.image)
      reader.onloadend =()=>{
        saveDto.image =reader.result as string
        console.log(saveDto.image)
        this.saveUseCase.execute(saveDto).subscribe({
          next:(value) =>{

          },
          error:(error)=>{
            this.saveDisabled = false
            alert(error)
          },
          complete:()=>{
            this.dialogsService.openInfoDialog("сохранено")
            this.saveDisabled = false
            this.onSuccessfulSave()
          }
        })
      }




    }else{
      this.saveDisabled = false
      this.dialogsService.openInfoDialog("Не все данные введены")
    }
  }

  onImageChange($event: Event) {
    const input = $event.target as HTMLInputElement;
    if (!input.files?.length) {
      this.formGroup.image = null
      return;
    }
    this.formGroup.image = input.files[0]
  }
}

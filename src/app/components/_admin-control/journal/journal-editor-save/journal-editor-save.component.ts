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
    override saveUseCase: JournalUseCaseSave
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

}

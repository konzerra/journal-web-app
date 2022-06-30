import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {JournalUseCaseUpdate} from "../../../../domain/journal/usecase/JournalUseCaseUpdate";
import {JournalUseCaseGetByIdFull} from "../../../../domain/journal/usecase/get/JournalUseCaseGetByIdFull";
import {JournalUpdateFormGroup} from "./form-group/JournalUpdateFormGroup";
import {JournalUpdateDto} from "../../../../domain/journal/dto/JournalUpdateDto";

import {
  GenericModelEditorUpdateComponent
} from "../../../../_generic/component/editor-control/GenericModelEditorUpdateComponent";
import {JournalData} from "../../../../domain/journal/JournalData";
import {JournalDataControls} from "../common/JournalDataControls";
import {ComponentRoutingPaths} from "../../../ComponentRoutingPaths";

@Component({
  selector: 'app-journal-editor-update',
  templateUrl: './journal-editor-update.component.html',
  styleUrls: ['./journal-editor-update.component.css']
})
export class JournalEditorUpdateComponent
  extends GenericModelEditorUpdateComponent<JournalData, JournalDataControls, JournalUpdateDto>
  implements OnInit {

  constructor(
    protected route: ActivatedRoute,
    protected useCaseUpdate: JournalUseCaseUpdate,
    protected useCaseFindByIdFull : JournalUseCaseGetByIdFull,
    private router:Router
  ) {
    super()
  }

  formGroup = new JournalUpdateFormGroup()
  selectedRadioButton = this.formGroup.requiredLangs[0]



  ngOnInit(): void {
    this.abstractOnInit()
  }

  protected onSuccessfulUpdate(): void {
    this.router.navigate([ComponentRoutingPaths.adminControl.journal.main])
  }

  onCancelClicked() {
    this.router.navigate([ComponentRoutingPaths.adminControl.journal.main])
  }

}

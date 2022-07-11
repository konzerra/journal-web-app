import { Component, OnInit } from '@angular/core';
import {
  GenericModelEditorSaveComponent
} from "../../../../_generic/component/editor-control/GenericModelEditorSaveComponent";
import {MarkdownData} from "../../../../domain/Markdown/MarkdownData";
import {MarkdownSaveDto} from "../../../../domain/Markdown/dto/MarkdownSaveDto";
import {DialogsService} from "../../../common/dialogs/dialogs.service";
import {Router} from "@angular/router";
import {MarkdownUseCaseSave} from "../../../../domain/Markdown/usecase/MarkdownUseCaseSave";
import {ComponentRoutingPaths} from "../../../ComponentRoutingPaths";
import {MarkdownDataControls} from "../common/MarkdownDataControls";
import { MarkdownSaveFormGroup } from './form-group/MarkdownSaveFormGroup';

@Component({
  selector: 'app-markdown-editor-save',
  templateUrl: './markdown-editor-save.component.html',
  styleUrls: ['./markdown-editor-save.component.css']
})
export class MarkdownEditorSaveComponent
  extends GenericModelEditorSaveComponent<
    MarkdownData,
    MarkdownDataControls,
    MarkdownSaveDto>
  implements OnInit {

  formGroup = new MarkdownSaveFormGroup();
  selectedRadioButton = this.formGroup.requiredLangs[0]

  constructor(
    protected dialogsService: DialogsService,
    protected router: Router,
    override saveUseCase: MarkdownUseCaseSave
  ) {
    super();
  }

  ngOnInit(): void {

  }

  onSuccessfulSave(): void {
    this.router.navigate([ComponentRoutingPaths.adminControl.markdown.main])
  }

  onCancelClicked() {
    this.router.navigate([ComponentRoutingPaths.adminControl.markdown.main])
  }
}

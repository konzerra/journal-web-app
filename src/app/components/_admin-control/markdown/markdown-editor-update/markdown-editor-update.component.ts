import { Component, OnInit } from '@angular/core';
import {ComponentRoutingPaths} from "../../../ComponentRoutingPaths";
import {
  GenericModelEditorUpdateComponent
} from "../../../../_generic/component/editor-control/GenericModelEditorUpdateComponent";
import {MarkdownData} from "../../../../domain/Markdown/MarkdownData";
import {MarkdownDataControls} from "../common/MarkdownDataControls";
import {MarkdownUpdateDto} from "../../../../domain/Markdown/dto/MarkdownUpdateDto";
import {ActivatedRoute, Router} from "@angular/router";
import {MarkdownUseCaseUpdate} from "../../../../domain/Markdown/usecase/MarkdownUseCaseUpdate";
import {Markdown} from "../../../../domain/Markdown/Markdown";
import {MarkdownUseCaseGetByIdFull} from "../../../../domain/Markdown/usecase/get/MarkdownUseCaseGetByIdFull";
import {MarkdownUpdateFormGroup} from "./form-group/MarkdownUpdateFormGroup";

@Component({
  selector: 'app-markdown-editor-update',
  templateUrl: './markdown-editor-update.component.html',
  styleUrls: ['./markdown-editor-update.component.css']
})
export class MarkdownEditorUpdateComponent
  extends GenericModelEditorUpdateComponent<MarkdownData, MarkdownDataControls, MarkdownUpdateDto>
  implements OnInit {

  constructor(
    protected route: ActivatedRoute,
    protected useCaseUpdate: MarkdownUseCaseUpdate,
    protected useCaseFindByIdFull : MarkdownUseCaseGetByIdFull,
    private router:Router
  ) {
    super()
  }

  formGroup = new MarkdownUpdateFormGroup()
  selectedRadioButton = this.formGroup.requiredLangs[0]



  ngOnInit(): void {
    this.abstractOnInit()
  }

  protected onSuccessfulUpdate(): void {
    this.router.navigate([ComponentRoutingPaths.adminControl.markdown.main])
  }

  onCancelClicked() {
    this.router.navigate([ComponentRoutingPaths.adminControl.markdown.main])
  }

}


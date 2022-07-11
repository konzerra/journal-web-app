import { Component, OnInit } from '@angular/core';
import {
  GenericModelEditorMainComponent
} from "../../../../_generic/component/editor-control/GenericModelEditorMainComponent";
import {Markdown} from "../../../../domain/Markdown/Markdown";
import {MarkdownPage} from "../../../../domain/Markdown/MarkdownPage";
import {ComponentRoutingPaths} from "../../../ComponentRoutingPaths";
import {DialogsService} from "../../../common/dialogs/dialogs.service";
import {MarkdownUseCaseDeleteById} from "../../../../domain/Markdown/usecase/MarkdownUseCaseDeleteById";
import {MarkdownUseCaseGetAllPaginated} from "../../../../domain/Markdown/usecase/get/MarkdownUseCaseGetAllPaginated";
import {Router} from "@angular/router";

@Component({
  selector: 'app-markdown-editor-main',
  templateUrl: './markdown-editor-main.component.html',
  styleUrls: ['./markdown-editor-main.component.css']
})
export class MarkdownEditorMainComponent
  extends GenericModelEditorMainComponent<Markdown, MarkdownPage>
  implements OnInit {

  override modelSavePath = ComponentRoutingPaths.adminControl.markdown.save
  override modelUpdatePath = ComponentRoutingPaths.adminControl.markdown.update

  constructor(
    override useCaseDeleteById: MarkdownUseCaseDeleteById,
    override useCaseGetAllPaginated: MarkdownUseCaseGetAllPaginated,
    protected dialogsService: DialogsService,
    protected router: Router,
  ) {
    super();
  }

  ngOnInit(): void {
    this.abstractOnInit()
  }
}

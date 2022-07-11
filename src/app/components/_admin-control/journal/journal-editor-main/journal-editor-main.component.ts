import { Component, OnInit } from '@angular/core';
import {Journal} from "../../../../domain/journal/Journal";
import {JournalUseCaseGetAllPaginated} from "../../../../domain/journal/usecase/get/JournalUseCaseGetAllPaginated";
import {JournalPage} from "../../../../domain/journal/JournalPage";
import {Router} from "@angular/router";
import {ComponentRoutingPaths} from "../../../ComponentRoutingPaths";
import {DialogsService} from "../../../common/dialogs/dialogs.service";
import {JournalUseCaseDeleteById} from "../../../../domain/journal/usecase/JournalUseCaseDeleteById";
import {
  GenericModelEditorMainComponent
} from "../../../../_generic/component/editor-control/GenericModelEditorMainComponent";

@Component({
  selector: 'app-journal-editor-main',
  templateUrl: './journal-editor-main.component.html',
  styleUrls: ['./journal-editor-main.component.css']
})
export class JournalEditorMainComponent
  extends GenericModelEditorMainComponent<Journal, JournalPage>
  implements OnInit {

  override  modelSavePath = ComponentRoutingPaths.adminControl.journal.save
  override modelUpdatePath = ComponentRoutingPaths.adminControl.journal.update

  constructor(
    override useCaseDeleteById: JournalUseCaseDeleteById,
    override useCaseGetAllPaginated: JournalUseCaseGetAllPaginated,
    protected dialogsService: DialogsService,
    protected router: Router,
  ) {
    super();
  }

  ngOnInit(): void {
    this.abstractOnInit()

  }

  onJournalClicked(index: number) {
    this.router.navigate(
      [ComponentRoutingPaths.adminControl.article.main],
      {queryParams:{model:JSON.stringify(this.modelPage.content[index])}}
    )
  }
}

import {Router} from "@angular/router";
import {UseCaseGetAllAbstract} from "../../usecase/get/UseCaseGetAllAbstract";
import {ModelI} from "../../model/ModelI";
import {SaveDtoI} from "../../model/SaveDtoI";
import {UpdateDtoI} from "../../model/UpdateDtoI";
import {UseCaseDeleteByIdAbstract} from "../../usecase/UseCaseDeleteByIdAbstract";
import {UseCaseGetAllPaginatedAbstract} from "../../usecase/get/UseCaseGetAllPaginatedAbstract";
import {ModelPageI} from "../../model/ModelPageI";
import {Journal} from "../../../domain/journal/Journal";
import {DialogsService} from "../../../components/common/dialogs/dialogs.service";
import {ComponentRoutingPaths} from "../../../components/ComponentRoutingPaths";

export abstract class GenericModelEditorMainComponent
< Model extends ModelI,
  ModelPage extends ModelPageI<Model>,
  > {
  protected abstract modelSavePath: string
  protected abstract modelUpdatePath: string
  protected abstract router: Router
  protected abstract dialogsService: DialogsService
  protected abstract useCaseGetAllPaginated:UseCaseGetAllPaginatedAbstract<Model,ModelPage>
  protected abstract useCaseDeleteById:UseCaseDeleteByIdAbstract

  protected constructor() {
  }
  modelPage:ModelPageI<Model> = {
    content: new Array<Model>(),
    empty: false,
    first: false,
    number: 0,
    numberOfElements: 0,
    size: 10,
    totalElements: 0,
    totalPages: 0

  }

  abstractOnInit(): void {
    this.useCaseGetAllPaginated.execute(this.modelPage.number, this.modelPage.size).subscribe(
      {
        next:(modelPage)=>{
          this.modelPage = modelPage
          console.log(modelPage)
        },
        error:()=>{

        },
        complete:()=>{

        }
      })
  }

  onAddClicked() {
    this.router.navigate([this.modelSavePath])
  }

  onDeleteClicked(model: Model, index: number) {
    this.dialogsService.openConfirmDialog().afterClosed().subscribe({
      next:(value)=>{
        if(value){
          this.useCaseDeleteById.execute(model.id.toString()).subscribe({
            complete:()=>{
              this.dialogsService.openInfoDialog("Успешно удалено")
              this.modelPage.content.splice(index,1)
            },
            error:(err)=>{
              this.dialogsService.openInfoDialog(err)
            }
          })
        }
      }
    })
  }

  onEdit(model: Model) {
    this.router.navigate(
      [this.modelUpdatePath],
      {queryParams: {id: JSON.stringify(model.id)}}
    )
  }

  onPageChange($event: number) {
    this.useCaseGetAllPaginated.execute($event-1,this.modelPage.size).subscribe(
      {
        next:(modelPage)=>{

          this.modelPage = modelPage
          console.log(this.modelPage)
        },
        error:()=>{

        },
        complete:()=>{

        }
      })
  }
}

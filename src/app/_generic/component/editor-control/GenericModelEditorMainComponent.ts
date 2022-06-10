import {Router} from "@angular/router";
import {UseCaseGetAllAbstract} from "../../usecase/UseCaseGetAllAbstract";
import {ModelI} from "../../model/ModelI";
import {SaveDtoI} from "../../model/SaveDtoI";
import {UpdateDtoI} from "../../model/UpdateDtoI";
import {UseCaseDeleteByIdAbstract} from "../../usecase/UseCaseDeleteByIdAbstract";

export abstract class GenericModelEditorMainComponent
< Model extends ModelI,
  SaveDto extends SaveDtoI,
  UpdateDto extends UpdateDtoI
  > {
  protected constructor(
    protected modelSavePath: string,
    protected modelUpdatePath: string,
    protected router: Router,
    protected useCaseGetAll:UseCaseGetAllAbstract<Model>,
    protected useCaseDeleteById:UseCaseDeleteByIdAbstract<Model>,
  ) {
  }

  modelList: Array<Model> = []
  modelForDelete!: Model

  abstractOnInit(): void {
    this.useCaseGetAll.execute().subscribe(
      {
        next: (v: Array<Model>) => {
          this.modelList = v
        },
        complete: () => {
        }
      })

  }

  onAddClicked() {
    this.router.navigate([this.modelSavePath])
  }

  onDeleteClicked(model: Model) {
    this.modelForDelete = model
  }

  onEdit(model: Model) {
    this.router.navigate(
      [this.modelUpdatePath],
      {queryParams: {id: JSON.stringify(model)}})
  }

  onDeleteClickedModal():void{
    this.useCaseDeleteById.execute(this.modelForDelete).subscribe({
      next:(value)=>{

      },
      error:(error)=>{
        alert(error)
      },
      complete:()=>{
        alert('Удалено')
        this.abstractOnInit()
      }
    })
  }
}

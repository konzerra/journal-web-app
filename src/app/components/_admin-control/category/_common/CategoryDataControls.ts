import {DataControlsAbstract} from "../../../../_generic/form-group/DataControlsAbstract";
import {FormControl, Validators} from "@angular/forms";
import {CategoryData} from "../../../../domain/category/CategoryData";


export class CategoryDataControls
  extends DataControlsAbstract<CategoryData>
{
  constructor(lang:string,id : Number | null = null) {
    super(lang, id);

  }

  name = new FormControl("", Validators.required)
  overview = new FormControl("",Validators.required)

  getData():CategoryData{
    return {
      id: this.id,
      lang: this.lang,
      name: this.name.value || "",
      overview: this.overview.value || ""

    }
  }

  valid(): boolean {
    return (
      this.name.valid &&
        this.overview.valid
    )
  }
}

import {DataControlsAbstract} from "../../../_generic/form-group/DataControlsAbstract";
import {FormControl, Validators} from "@angular/forms";
import {PriceData} from "../../../shared/models/price/PriceData";

export class PriceDataControls extends DataControlsAbstract<PriceData>
{
  constructor(lang:string,id : Number | null = null) {
    super(lang, id);

  }

  name = new FormControl("", Validators.required)
  overview = new FormControl("",Validators.required)

  getData():PriceData{
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

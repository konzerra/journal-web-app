import {DataControlsAbstract} from "../../../_generic/form-group/DataControlsAbstract";
import {FormControl, Validators} from "@angular/forms";
import {TipData} from "../../../shared/models/tip/TipData";


export class TipDataControls
  extends DataControlsAbstract<TipData>
{
  constructor(lang:string,id : Number | null = null) {
    super(lang, id);

  }

  question = new FormControl("", Validators.required)
  answer = new FormControl("",Validators.required)

  getData():TipData{
    return {
      id: this.id,
      lang: this.lang,
      question: this.question.value || "",
      answer: this.answer.value || ""

    }
  }

  valid(): boolean {
    return (
      this.question.valid &&
        this.answer.valid
    )
  }
}

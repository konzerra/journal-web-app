import {DataControlsAbstract} from "../../../../_generic/form-group/DataControlsAbstract";
import {MarkdownData} from "../../../../domain/markdown/MarkdownData";
import {FormControl, Validators} from "@angular/forms";

export class MarkdownDataControls
  extends DataControlsAbstract<MarkdownData>
{
  constructor(lang:string,id : Number | null = null) {
    super(lang, id);

  }

  name = new FormControl("",Validators.required)
  source = new FormControl("",Validators.required)

  getData():MarkdownData{
    return {
      id: this.id,
      lang: this.lang,
      name: this.name.value || "",
      source: this.source.value || ""

    }
  }

  valid(): boolean {
    return (
      this.source.valid && this.name.valid
    )
  }
}

import {DataControlsAbstract} from "../../../../_generic/form-group/DataControlsAbstract";
import {MarkdownData} from "../../../../domain/Markdown/MarkdownData";
import {FormControl, Validators} from "@angular/forms";

export class MarkdownDataControls
  extends DataControlsAbstract<MarkdownData>
{
  constructor(lang:string,id : Number | null = null) {
    super(lang, id);

  }

  source = new FormControl("",Validators.required)

  getData():MarkdownData{
    return {
      id: this.id,
      lang: this.lang,
      source: this.source.value || ""

    }
  }

  valid(): boolean {
    return (
      this.source.valid
    )
  }
}

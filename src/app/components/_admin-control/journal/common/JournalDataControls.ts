import {FormControl, Validators} from "@angular/forms";
import {JournalData} from "../../../../shared/models/journal/JournalData";
import {DataControlsAbstract} from "../../../../_generic/form-group/DataControlsAbstract";

export class JournalDataControls
  extends DataControlsAbstract<JournalData>
{
  constructor(lang:string,id : Number | null = null) {
    super(lang, id);

  }

  name = new FormControl("", Validators.required)
  version = new FormControl("",Validators.required)

  getData():JournalData{
    return {
      id: this.id,
      lang: this.lang,
      name: this.name.value || "",
      version: this.version.value || ""

    }
  }

  valid(): boolean {
    return (
      this.name.valid &&
        this.version.valid
    )
  }
}

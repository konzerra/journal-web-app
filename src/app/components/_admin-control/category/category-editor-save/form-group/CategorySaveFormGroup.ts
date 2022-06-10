import {GenericSaveFormGroup} from "../../../../../_generic/form-group/GenricSaveFormGroup";
import {FormControl, FormGroup, Validators} from "@angular/forms";

export class CategorySaveFormGroup extends GenericSaveFormGroup{




  name:FormControl =  new FormControl("", Validators.required);
  overview:FormControl =  new FormControl("", Validators.required);
  lang:FormControl =  new FormControl("", Validators.required);


  formGroup:FormGroup = new FormGroup({
    name: this.name,
    overview: this.overview,
    tags: this.lang,
  })


}

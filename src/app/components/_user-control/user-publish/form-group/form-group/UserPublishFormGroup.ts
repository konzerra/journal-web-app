
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GenericSaveFormGroup} from "../../../../../_generic/form-group/GenricSaveFormGroup";
import {Category} from "../../../../../domain/category/Category";


export class UserPublishFormGroup extends GenericSaveFormGroup{
  journal: FormControl = new FormControl(null, Validators.required)
  category: FormControl = new FormControl(null, Validators.required)
  wordFile: FormControl = new FormControl(null,Validators.required)

  name: FormControl = new FormControl(null,Validators.required)

  formGroup:FormGroup = new FormGroup({
    journal: this.journal,
    category: this.category,
    wordFile: this.wordFile
  })


}

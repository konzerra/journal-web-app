import {FormControl} from "@angular/forms";

export function genericCheckFormControl(formControl:FormControl):boolean{
  return formControl.invalid && (formControl.dirty || formControl.touched)
}

import {SaveDtoI} from "../model/SaveDtoI";
import {FormGroup} from "@angular/forms";
import {UpdateDtoI} from "../model/UpdateDtoI";
import {ModelI} from "../model/ModelI";

export abstract class GenericUpdateFormGroup<Model extends ModelI, UpdateDto extends UpdateDtoI>
{
  abstract formGroup:FormGroup
  protected abstract updateDto:UpdateDto
  abstract setUpdateDto(updateDto:UpdateDto):void
  abstract getUpdateDto():UpdateDto
}

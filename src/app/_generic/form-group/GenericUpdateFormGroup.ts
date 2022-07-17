
import {FormArray, FormGroup} from "@angular/forms";
import {UpdateDtoI} from "../model/UpdateDtoI";
import {ModelI} from "../model/ModelI";
import {DataControlsAbstract} from "./DataControlsAbstract";

export abstract class GenericUpdateFormGroup<
  ModelFull extends ModelI,
  ModelData extends ModelI,
  DataControls extends DataControlsAbstract<ModelData>,
  UpdateDto,

  >
{
  abstract requiredLangs: Array<string>
  protected dataControlsList = new Array<DataControls>()

  abstract onLangChange(lang:string):void

  protected isDataControlsListValid():boolean{
    for(const dataControls of this.dataControlsList){
      if(!dataControls.valid()){
        return false
      }
    }
    return true;
  }

  abstract getDto():UpdateDto
  abstract setDto(modelFull:ModelFull):void
  abstract valid():boolean
}

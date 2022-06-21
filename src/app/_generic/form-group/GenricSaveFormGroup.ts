import {DataControlsAbstract} from "./DataControlsAbstract";
import {ModelI} from "../model/ModelI";
import {SaveDtoI} from "../model/SaveDtoI";

export abstract class GenericSaveFormGroup<
  ModelData extends ModelI,
  DataControls extends DataControlsAbstract<ModelData>,
  SaveDto extends SaveDtoI
  >
{
  abstract requiredLangs: Array<string>
  protected dataControlsList = new Array<DataControls>()

  protected isDataControlsListValid():boolean{
    for(const dataControls of this.dataControlsList){
      if(!dataControls.valid()){
        return false
      }
    }
    return true;
  }

  abstract onLangChange(lang:string):void
  abstract getDto():SaveDto
  abstract valid():boolean
}

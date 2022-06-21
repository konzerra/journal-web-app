import {JournalData} from "../../domain/journal/JournalData";
import {ModelI} from "../model/ModelI";

export abstract class DataControlsAbstract<DataModel extends ModelI> {

  protected constructor(
    public lang:string, public id : Number | null = null
  ) {
  }

  abstract getData():DataModel
  abstract valid():boolean
}

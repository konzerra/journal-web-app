import {ModelI} from "../../_generic/model/ModelI";

export class Category implements ModelI{
  id:Number = -1
  name:string = ""
  overview:string = ""
  constructor(
    fields?:{
      id?:Number
      name?:string
      overview?:string
    }
  ) {
    if(fields){
      this.id = fields.id || this.id
      this.name = fields.name || this.name
      this.overview = fields.overview || this.overview
    }
  }
}

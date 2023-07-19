import {GenericSaveFormGroup} from "../../../_generic/form-group/GenricSaveFormGroup";
import {RequiredLanguages} from "../../../domain/RequiredLanguages";
import {FormControl, Validators} from "@angular/forms";
import {PriceData} from "../../../domain/price/PriceData";
import {PriceDataControls} from "../_models/PriceDataControls";
import {PriceSaveDto} from "../_models/PriceSaveDto";


export class PriceSaveForm extends GenericSaveFormGroup<PriceData, PriceDataControls, PriceSaveDto> {


  requiredLangs: Array<string> = Object.values(RequiredLanguages)

  sum = new FormControl<number>(0, Validators.required)

  //changes on lang changes
  name : FormControl
  overview:FormControl

  constructor() {
    super();
    this.requiredLangs.forEach((lang)=>{
      this.dataControlsList.push(new PriceDataControls(lang))
    })
    this.name = this.dataControlsList[0].name
    this.overview = this.dataControlsList[0].overview
  }

  onLangChange(lang:string){
    let data = this.dataControlsList.find(data=>
      data.lang == lang
    )
    if(data!=undefined){
      this.name = data.name
      this.overview = data.overview
    }
  }

  getDto():PriceSaveDto{
    let saveDto:PriceSaveDto = {
      sum: this.sum.value || 0,
      dataList: new Array<PriceData>()
    }
    this.dataControlsList.forEach((data)=>{
      saveDto.dataList.push(data.getData())
    })

    return saveDto
  }

  valid(): boolean {
    return this.isDataControlsListValid() &&
      this.sum.valid
  }

}

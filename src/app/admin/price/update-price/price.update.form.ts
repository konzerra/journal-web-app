import {GenericUpdateFormGroup} from "../../../_generic/form-group/GenericUpdateFormGroup";
import {RequiredLanguages} from "../../../domain/RequiredLanguages";
import {FormControl,  Validators} from "@angular/forms";
import {PriceFull} from "../../../shared/models/price/PriceFull";
import {PriceDataControls} from "../_models/PriceDataControls";
import {PriceUpdateDto} from "../_models/PriceUpdateDto";
import {PriceData} from "../../../shared/models/price/PriceData";


export class PriceUpdateForm
  extends GenericUpdateFormGroup<PriceFull, PriceData, PriceDataControls, PriceUpdateDto>
{

  requiredLangs: Array<string> = Object.values(RequiredLanguages)

  sum = new FormControl(0.0, Validators.required)

  //changes on lang changed
  name  = new FormControl("", Validators.required)
  overview  = new FormControl("", Validators.required)

  updateDto:PriceUpdateDto = {
    id: 0,
    dataList: [],
    sum: 0
  }

  constructor() {
    super();
  }

  valid(): boolean {
    return this.isDataControlsListValid() && this.sum.valid
  }

  setDto(modelFull:PriceFull){
    this.updateDto = modelFull

    this.sum.setValue(this.updateDto.sum)
    //for each data in updateDto create its own controls
    this.updateDto.dataList.forEach((modelData)=>{
      let priceDataControls = new PriceDataControls(modelData.lang, modelData.id)
      priceDataControls.name.setValue(modelData.name)
      priceDataControls.overview.setValue(modelData.overview)
      this.dataControlsList.push(priceDataControls)

      if(modelData.lang == this.requiredLangs[0]){
        this.name = priceDataControls.name
        this.overview =  priceDataControls.overview
      }
    })

  }

  getDto(): PriceUpdateDto{
    let updateDto: PriceUpdateDto = {
      id: this.updateDto.id,
      sum: this.sum.value || 0,
      dataList: new Array<PriceData>()
    }
    this.dataControlsList.forEach((data)=>{
      updateDto.dataList.push(data.getData())
    })
    return updateDto
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




}

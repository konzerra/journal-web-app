import {DataControlsAbstract} from "../../../_generic/form-group/DataControlsAbstract";
import {ArticleData} from "../../../shared/models/article/ArticleData";
import {FormArray, FormControl, Validators} from "@angular/forms";
import {wordCountValidator} from "../../../shared/validators";

export class ArticleDataControls
  extends DataControlsAbstract<ArticleData>
{

  constructor(lang:string,id : Number | null) {
    super(lang, id);
  }

  name : FormControl = new FormControl("", Validators.required)
  authors: Array<FormControl> = new Array<FormControl>()
  annotation: FormControl = new FormControl("", [Validators.required, wordCountValidator(200)])
  tags: FormControl = new FormControl("", [Validators.required, wordCountValidator(10)])

  addAuthor(author:string = ''){
    this.authors.push(new FormControl(author,Validators.required))
  }
  removeAuthor(index:number){
    this.authors.splice(index,1)
  }
  getData(): ArticleData {
    let authorsLine = ""
    this.authors.forEach((author)=>{
      authorsLine += author.value + "$$"
    })
    authorsLine = authorsLine.slice(0,authorsLine.length-2)
    return {
      id:this.id,
      lang:this.lang,
      name:this.name.value,
      authors: authorsLine,
      annotation: this.annotation.value,
      tags:this.tags.value
    };
  }

  valid(): boolean {
    //minimum one author required

    if(this.authors.length<1) return false
    for(const author of this.authors){
      if(!author.valid) return false
    }
    return (
      this.name.valid &&
        this.annotation.valid && this.tags.valid
    )
  }

}

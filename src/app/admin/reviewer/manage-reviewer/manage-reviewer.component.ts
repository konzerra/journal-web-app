import {Component, OnInit} from '@angular/core';
import {ReviewerService} from "../../../domain/reviewer/reviewer.service";
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {Router} from "@angular/router";
import {PageRequestDto} from "../../../domain/pagination/PageRequestDto";
import {ReviewerPage} from "../../../domain/reviewer/ReviewerPage";
import {ComponentRoutingPaths} from "../../../ComponentRoutingPaths";
import {Reviewer} from "../../../domain/reviewer/Reviewer";
import {FormControl, Validators} from "@angular/forms";
import {genericCheckFormControl} from "../../../_generic/util/genericCheckFormControl";

@Component({
  selector: 'app-manage-reviewer',
  templateUrl: './manage-reviewer.component.html',
  styleUrls: ['./manage-reviewer.component.css']
})
export class ManageReviewerComponent implements OnInit {

  constructor(
    private reviewerService: ReviewerService,
    protected dialogsService: DialogsService,
    protected router: Router,
  ) {

  }
  searchControl = new FormControl<string>(
    "",
    [Validators.minLength(3), Validators.required]
  )
  pageRequestDto: PageRequestDto = {
    page: 0,
    size: 10,
    sort: [
      {
        property : "id",
        direction: "desc"
      }
    ]
  }
  modelPage: ReviewerPage = {
    content: [],
    empty: true,
    first: true,
    number: 0,
    numberOfElements: 0,
    size: 10,
    totalElements: 0,
    totalPages: 0
  }

  searchDisabled = false
  ngOnInit(): void {
    this.reviewerService.getPaginated(this.pageRequestDto).subscribe(
      {
        next:(modelPage)=>{
          this.modelPage = modelPage
        },
        error:(err)=>{
          this.dialogsService.openInfoDialog(err)
        },
        complete:()=>{

        }
      })
    this.searchControl.valueChanges.subscribe({
      next:(value)=>{
        if (value?.length === 0) {
          this.handleSearchEmptied();
        }
      }
    });
  }



  onAddClicked() {
    this.router.navigate([ComponentRoutingPaths.adminControl.reviewer.save])
  }

  onDeleteClicked(model: Reviewer, index: number) {
    this.dialogsService.openConfirmDialog().afterClosed().subscribe({
      next:(value)=>{
        if(value){
          this.reviewerService.deleteById(model.id.toString()).subscribe({
            complete:()=>{
              this.dialogsService.openInfoDialog("Успешно удалено")
              this.modelPage.content.splice(index,1)
            },
            error:(err)=>{
              this.dialogsService.openInfoDialog(err)
            }
          })
        }
      }
    })
  }
  onEdit(model: Reviewer) {
    this.router.navigate(
      [ComponentRoutingPaths.adminControl.reviewer.update],
      {queryParams: {id: JSON.stringify(model.id)}}
    )
  }
  onPageChange($event: number) {
    this.pageRequestDto.page = $event-1
    if(this.searchControl.valid){
      this.runSearch()
    }
    else {
      this.reviewerService.getPaginated(this.pageRequestDto).subscribe(
        {
          next:(modelPage)=>{
            this.modelPage = modelPage
          },
          error:(err)=>{
            this.dialogsService.openInfoDialog(err)
          }
        })
    }
  }


  checkFormControl(email: FormControl) {
    return genericCheckFormControl(email)
  }

  search() {
    if(this.searchControl.valid){
      this.pageRequestDto.page = 0
      this.runSearch()
    }

  }
  private runSearch(){
    this.searchDisabled = true
    console.log(this.searchControl.valid);
    if(this.searchControl.valid){
      console.log(this.modelPage.content)
      this.reviewerService.searchByEmail(this.searchControl.value || "email", this.pageRequestDto).subscribe({
        next:(v)=>{
          this.modelPage = v
        },
        error:(err)=>{
          this.dialogsService.openInfoDialog(err)
          this.searchDisabled = false
        },
        complete:() =>{
          this.searchDisabled = false
        }
      })
    }else{
      this.searchDisabled = false
    }
  }

  private runDefaultFetch(){
    this.reviewerService.getPaginated(this.pageRequestDto).subscribe(
      {
        next:(modelPage)=>{
          this.modelPage = modelPage
        },
        error:(err)=>{
          this.dialogsService.openInfoDialog(err)
        }
      })
  }

  handleSearchEmptied() {
    this.pageRequestDto.page = 0
    this.runDefaultFetch()
  }
}

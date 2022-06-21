import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-mat-dialog-info',
  templateUrl: './mat-info-dialog.component.html',
  styleUrls: ['./mat-info-dialog.component.css']
})
export class MatInfoDialogComponent implements OnInit {

  constructor(
    public dialogRef : MatDialogRef<MatInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{
      message:string
    }
  ) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close()
  }
}

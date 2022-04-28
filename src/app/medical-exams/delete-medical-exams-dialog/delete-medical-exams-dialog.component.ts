import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-medical-exams-dialog',
  templateUrl: './delete-medical-exams-dialog.component.html',
  styleUrls: ['./delete-medical-exams-dialog.component.sass']
})
export class DeleteMedicalExamsDialogComponent implements OnInit {


  ngOnInit(): void {
  }
  constructor(
    public dialogRef: MatDialogRef<DeleteMedicalExamsDialogComponent> // @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}

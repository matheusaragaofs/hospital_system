import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-patient-waiting-list-dialog',
  templateUrl: './delete-patient-waiting-list-dialog.component.html',
  styleUrls: ['./delete-patient-waiting-list-dialog.component.sass']
})
export class DeletePatientWaitingListDialogComponent implements OnInit {


  ngOnInit(): void {
  }
  constructor(
    public dialogRef: MatDialogRef<DeletePatientWaitingListDialogComponent> // @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}

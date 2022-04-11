import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'patient-register-dialog',
  templateUrl: './patient-register-dialog.component.html',
  styleUrls: ['./patient-register-dialog.component.sass']
})
export class PatientRegisterDialogComponent implements OnInit {

  // constructor( public dialogRef: MatDialogRef<PatientRegisterDialogComponent>) { }
  // cancel(): void {
  //   this.dialogRef.close();
  // }
  ngOnInit(): void {
  }
 
}

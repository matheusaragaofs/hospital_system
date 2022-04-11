import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PatientRegisterDialogComponent } from './patient-register-dialog/patient-register-dialog.component';

export interface PeriodicElement {
  name: string;
  cpf: string;
  priority: 'low' | 'medium' | 'high';
}
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
const ELEMENT_DATA: PeriodicElement[] = [
  {cpf: '103.702.204-53', name: 'JORGE AUGUSTO ALMEIDA FILHO', priority: 'low'},
  {cpf: '103.702.204-53', name: 'JORGE AUGUSTO ALMEIDA FILHO', priority: 'medium'},
  {cpf: '103.702.204-53', name: 'JORGE AUGUSTO ALMEIDA FILHO', priority: 'low'},
  {cpf: '103.702.204-53', name: 'JORGE AUGUSTO ALMEIDA FILHO', priority: 'medium'},
  {cpf: '103.702.204-53', name: 'JORGE AUGUSTO ALMEIDA FILHO', priority: 'low'},
  {cpf: '103.702.204-53', name: 'JORGE AUGUSTO ALMEIDA FILHO', priority: 'high'},
  {cpf: '103.702.204-53', name: 'JORGE AUGUSTO ALMEIDA FILHO', priority: 'low'},
  {cpf: '103.702.204-53', name: 'JORGE AUGUSTO ALMEIDA FILHO', priority:  'low'},
  {cpf: '103.702.204-53', name: 'JORGE AUGUSTO ALMEIDA FILHO', priority:  'low'},
  {cpf: '103.702.204-53', name: 'JORGE AUGUSTO ALMEIDA FILHO', priority:  'low'},
  {cpf: '103.702.204-53', name: 'JORGE AUGUSTO ALMEIDA FILHO', priority:  'low'},
  {cpf: '103.702.204-53', name: 'JORGE AUGUSTO ALMEIDA FILHO', priority:  'low'},
  {cpf: '103.702.204-53', name: 'JORGE AUGUSTO ALMEIDA FILHO', priority:  'low'},
  {cpf: '103.702.204-53', name: 'JORGE AUGUSTO ALMEIDA FILHO', priority:  'low'},
  {cpf: '103.702.204-53', name: 'JORGE AUGUSTO ALMEIDA FILHO', priority:  'low'},
  {cpf: '103.702.204-53', name: 'JORGE AUGUSTO ALMEIDA FILHO', priority:  'low'},
  {cpf: '103.702.204-53', name: 'JORGE AUGUSTO ALMEIDA FILHO', priority:  'low'},
  {cpf: '103.702.204-53', name: 'JORGE AUGUSTO ALMEIDA FILHO', priority:  'low'},
  {cpf: '103.702.204-53', name: 'JORGE AUGUSTO ALMEIDA FILHO', priority:  'low'},
];

@Component({
  selector: 'app-patients',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.sass']
})


export class PatientComponent implements OnInit {
  displayedColumns: string[] = ['cpf', 'name', 'priority', 'actions'];
  dataSource = ELEMENT_DATA;

  // constructor(public dialog: MatDialog) {}
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(PatientRegisterDialogComponent, {
  //     width: '250px',
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }

  ngOnInit(): void {
  }

}


import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-patient-view-dialog',
  templateUrl: './patient-view-dialog.component.html',
  styleUrls: ['./patient-view-dialog.component.sass'],
})
export class PatientViewDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  
  public priorityValue: any = {
    high: 'Alta',
    medium: 'Média',
    low: 'Baixa',
  };
  
  public name = this.data.patient.name;
  public cpf = this.data.patient.cpf;
  public rg = this.data.patient.rg;
  public address = this.data.patient.address;
  public complement = this.data.patient.complement;
  public health_insurance_id = this.data.patient.health_insurance_id;
  public priority = this.priorityValue[this.data.patient.priority];

  ngOnInit(): void {
  }
}

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-medical-exams-dialog',
  templateUrl: './view-medical-exams-dialog.component.html',
  styleUrls: ['./view-medical-exams-dialog.component.sass'],
})
export class ViewMedicalExamsDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  public patient_name = this.data.patient.patient_name;
  public cpf = this.data.patient.cpf;
  public phone_number = this.data.patient.phone_number;
  public birthday_date = this.data.patient.birthday_date;
  public schedule_date = this.data.patient.schedule_date;
  public doctor_name = this.data.patient.doctor_name;
  public exam_type = this.data.patient.exam_type;
  
  ngOnInit(): void {}
}

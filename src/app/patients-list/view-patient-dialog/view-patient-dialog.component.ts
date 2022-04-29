import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-patient-dialog',
  templateUrl: './view-patient-dialog.component.html',
  styleUrls: ['./view-patient-dialog.component.sass'],
})
export class ViewPatientDialogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public name = '';
  public cpf = '';
  public phone_number = '';
  public birthday_date = '';
  public schedule_date = '';
  public doctor_name = '';
  public exam_type = '';
}

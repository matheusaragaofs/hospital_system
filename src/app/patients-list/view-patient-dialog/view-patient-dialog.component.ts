import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-patient-dialog',
  templateUrl: './view-patient-dialog.component.html',
  styleUrls: ['./view-patient-dialog.component.sass'],
})
export class ViewPatientDialogComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
  public cpf = '103.702.204-53	';
  public name = 'JORGE AUGUSTO ALMEIDA FILHO';
  public phone_number = '81984549123';
  public birthday_date = '22/02/2002';
  public cep = '1150231'
  public address = 'Rua X'
  public gender = 'Masculino'

}

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-patient-dialog',
  templateUrl: './view-patient-dialog.component.html',
  styleUrls: ['./view-patient-dialog.component.sass'],
})
export class ViewPatientDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  formatDate(date: string) {
    const formatedDate = date,
      [yyyy, mm, dd, hh, mi] = date.split(/[/:\-T]/);
    return `${dd}/${mm}/${yyyy}`;
  }
  
  public genders: any = {
    male: 'Masculino',
    female: 'Feminino',
    others: 'Outros',
  };



  ngOnInit(): void {}

  public patient = this.data
}

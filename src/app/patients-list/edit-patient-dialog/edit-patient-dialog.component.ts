import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-edit-patient-dialog',
  templateUrl: './edit-patient-dialog.component.html',
  styleUrls: ['./edit-patient-dialog.component.sass'],
})
export class EditPatientDialogComponent implements OnInit {
  public name = '';
  public cpf = '';
  public cep = '';
  public gender = '';
  public address = '';
  public birthday_date = '';
  public health_insurance_id = '';
  public phone_number = '';
  public selectedSex = '';
  public sexOptions: { label: string; id: string }[] = [
    {
      label: 'Masculino',
      id: 'male',
    },
    {
      label: 'Feminino',
      id: 'female',
    },
    {
      label: 'Outros',
      id: 'other',
    },
  ];

  setSelectedSexId(event: MatSelectChange): void {
    this.selectedSex = event.value;
  }

  onSubmit(): void {
    const {
      name,
      cpf,
      cep,
      address,
      health_insurance_id,
      birthday_date,
      selectedSex,
      phone_number,
    } = this;
    console.log('this', this);
    const registerData = {
      name,
      cpf,
      address,
      health_insurance_id,
      birthday_date,
      cep,
      gender: selectedSex,
      phone_number,
    };

    console.log('registerData', registerData);
  }

  constructor(public dialogRef: MatDialogRef<EditPatientDialogComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {}
}

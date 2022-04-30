import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-create-patient-dialog',
  templateUrl: './create-patient-dialog.component.html',
  styleUrls: ['./create-patient-dialog.component.sass'],
})
export class CreatePatientDialogComponent implements OnInit {
  public name = '';
  public cpf = '';
  public cep = '';
  public gender = '';
  public address = '';
  public birthday_date = '';
  public phone_number = '';
  // public selectedSex = '';
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
    this.gender = event.value;
  }

  onSubmit(): void {
    const {
      name,
      cpf,
      cep,
      address,
      birthday_date,
      gender,
      phone_number,
    } = this;
    console.log('this', this);
    const registerData = {
      name,
      cpf,
      address,
      birthday_date,
      cep,
      gender,
      phone_number,
    };

    console.log('registerData', registerData);
  }

  constructor(public dialogRef: MatDialogRef<CreatePatientDialogComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {}
}

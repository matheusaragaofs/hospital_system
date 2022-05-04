import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { lastValueFrom } from 'rxjs';
import { PatientsListService } from '../patients-list.service';

@Component({
  selector: 'app-create-patient-dialog',
  templateUrl: './create-patient-dialog.component.html',
  styleUrls: ['./create-patient-dialog.component.sass'],
})
export class CreatePatientDialogComponent implements OnInit {
  public name = '';
  public cpf = '';
  public cep = '';
  public address = '';
  public date_of_birth = '';
  public phone_number = '';
  public gender = '';
  public genders: { label: string; id: string }[] = [
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

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private patientsService: PatientsListService,
    public dialogRef: MatDialogRef<CreatePatientDialogComponent> // @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  setGender(event: MatSelectChange): void {
    this.gender = event.value;
  }

  async onSubmit(): Promise<void> {
    const { name, cpf, cep, address, gender, date_of_birth, phone_number } =
      this;

    const patientData = {
      name,
      cpf,
      address,
      date_of_birth,
      cep,
      gender,
      phone_number,
    };

    console.log('registerData', patientData);

    try {
      await lastValueFrom(
        this.patientsService.addPatient(patientData)
      ).then((result) =>
        console.log('Adição de paciente realizada com sucesso')
      ).catch(error=> console.log('cade o erro', error));
    } catch (error) {
      console.log('error', error);
    }

    window.location.reload();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {}
}

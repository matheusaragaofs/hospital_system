import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { lastValueFrom } from 'rxjs';
import { PatientsListService } from '../patients-list.service';
export interface Patient {
  name: string;
  cpf: string;
  cep: string;
  gender: string;
  address: string;
  date_of_birth: string;
  phone_number: string;
}

@Component({
  selector: 'app-edit-patient-dialog',
  templateUrl: './edit-patient-dialog.component.html',
  styleUrls: ['./edit-patient-dialog.component.sass'],
})
export class EditPatientDialogComponent implements OnInit {
  constructor(
    private patientsService: PatientsListService,
    @Inject(MAT_DIALOG_DATA) public data: Patient,
    public dialogRef: MatDialogRef<EditPatientDialogComponent>
  ) {}

  public name = this.data.name;
  public cpf = this.data.cpf;
  public cep = this.data.cep;
  public gender = this.data.gender;
  public address = this.data.address;
  public date_of_birth = this.data.date_of_birth;
  public phone_number = this.data.phone_number;
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

  async onSubmit(): Promise<void> {
    const {
      name,
      cpf,
      cep,
      address,
      date_of_birth,
      selectedSex,
      phone_number,
    } = this;

    const patient = {
      name,
      address,
      date_of_birth,
      cep,
      gender: selectedSex || this.gender,
      phone_number,
    };

    try {
      await this.patientsService.editPatient(cpf, patient);
      console.log('Sucesso ao realizar edição')
    } catch (err) {
      console.log('Erro ao listar os pacientes', err);
    }

    this.closeDialog();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}

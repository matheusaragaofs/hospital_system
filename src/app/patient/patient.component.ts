import { Component, OnInit, Inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { PatientRegisterDialogComponent } from './patient-register-dialog/patient-register-dialog.component';
import { PatientViewDialogComponent } from './patient-view-dialog/patient-view-dialog.component';
import { PatientsService } from './patients.service';

export type WaitingListPatient = {
  id: string;
  patient_cpf: string;
  attended: boolean;
  priority: number;
  created_at: Date;
  patient: {
    name: string;
    date_of_birth: Date;
    phone_number: string;
    cep: string;
    address: string;
    gender: 'male' | 'female' | 'others';
  };
};
export interface Response {
  body: WaitingListPatient;
}
export interface PeriodicElement {
  name: string;
  cpf: string;
  priority: 'low' | 'medium' | 'high';
  isServed: boolean;
}
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-patients',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.sass'],
})
export class PatientComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'cpf',
    'name',
    'priority',
    'served',
    'actions',
  ];

  public color: any = '';
  public isServed: boolean = false;

  public dataSource: WaitingListPatient | any = [];

  onToggle(event: any): void {
    console.log(event);
  }

  setPriority(event: any): void {
    const priority = Number(event.value);
    this.patientsService.findAllPatients({ filter:priority }).subscribe(
      (data: Response) => (this.dataSource = data.body),
      (err: any) => console.log('Erro ao listar os pacientes', err)
    );
  }
  public patients: any = [];
  constructor(
    public matDialog: MatDialog,
    private patientsService: PatientsService
  ) {}

  openCreatePatientDialog(): void {
    this.matDialog.open(PatientRegisterDialogComponent, {
      width: '600px',
      maxHeight: '500px',
    });
  }
  // openEditPatientDialog(): void {
  //   this.matDialog.open(EditPatientWaitingListDialogComponent, {
  //     data: {
  //       edit: true,
  //       patient: this.patient,
  //     },
  //     width: '800px',
  //   });
  // }
  // openDeletePatientDialog(): void {
  //   this.matDialog.open(DeletePatientWaitingListDialogComponent, {
  //     data: {
  //       edit: true,
  //       patient: this.patient,
  //     },
  //     width: '300px',
  //     height: '135px',
  //   });
  // }

  openViewPatientDialog(): void {
    this.matDialog.open(PatientViewDialogComponent, {
      width: '600px',
      maxHeight: '500px',
      data: {
        patient: [],
      },
    });
  }

  ngOnInit(): void {
    this.patientsService.findAllPatients({}).subscribe(
      (data: Response) => (this.dataSource = data.body),
      (err: any) => console.log('Erro ao listar os pacientes', err)
    );
  }
}

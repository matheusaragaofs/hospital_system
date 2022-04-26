import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PatientRegisterDialogComponent } from '../patient/patient-register-dialog/patient-register-dialog.component';
import { PatientViewDialogComponent } from '../patient/patient-view-dialog/patient-view-dialog.component';

export interface PeriodicElement {
  name: string;
  schedule_date: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
  },

  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
  },

  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
  },

  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
  },
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
  },
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
  },
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
  },
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
  },
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
  },
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
  },
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
  },
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
  },
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
  },
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
  },
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
  },
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
  },
];

@Component({
  selector: 'app-medical-exams',
  templateUrl: './medical-exams.component.html',
  styleUrls: ['./medical-exams.component.sass'],
})
export class MedicalExamsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'schedule_date', 'actions'];
  dataSource = ELEMENT_DATA;
  patient = {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    cpf: '101.234.673-45',
    rg: '564456111',
    address: 'Rua Santo Carmo 1',
    complement: 'Atrás do Viaduto',
    health_insurance_id: '1',
    schedule_date: 'high',
  };

  constructor(public matDialog: MatDialog) {}
  openCreatePatientDialog(): void {
    this.matDialog.open(PatientRegisterDialogComponent, {
      width: '600px',
      height: '400px',
    });
  }
  openEditPatientDialog(): void {
    this.matDialog.open(PatientRegisterDialogComponent, {
      data: {
        edit: true,
        patient: this.patient,
      },
      width: '600px',
      height: '400px',
    });
  }

  openViewPatientDialog(): void {
    this.matDialog.open(PatientViewDialogComponent, {
      width: '300px',
      height: '400px',
      data: {
        patient: this.patient,
      },
    });
  }

  ngOnInit(): void {}
}

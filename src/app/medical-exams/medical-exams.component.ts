import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PatientRegisterDialogComponent } from '../patient/patient-register-dialog/patient-register-dialog.component';
import { PatientViewDialogComponent } from '../patient/patient-view-dialog/patient-view-dialog.component';
import { CreateMedicalExamsDialogComponent } from './create-medical-exams-dialog/create-medical-exams-dialog.component';

export interface PeriodicElement {
  patient_name: string;
  schedule_date: string;
  exam_type: string;
  doctor_name: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    patient_name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    patient_name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    patient_name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    patient_name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    patient_name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    patient_name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    patient_name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    patient_name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    patient_name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    patient_name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    patient_name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    patient_name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    patient_name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    patient_name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    patient_name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    patient_name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    patient_name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    patient_name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    patient_name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    patient_name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    patient_name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
];

@Component({
  selector: 'app-medical-exams',
  templateUrl: './medical-exams.component.html',
  styleUrls: ['./medical-exams.component.sass'],
})
export class MedicalExamsComponent implements OnInit {
  displayedColumns: string[] = [
    'patient_name',
    'schedule_date',
    'exam_type',
    'doctor_name',
    'actions',
  ];
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

  openCreateMedicalExamDialog(): void {
    this.matDialog.open(CreateMedicalExamsDialogComponent, {
      width: '600px',
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

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PatientRegisterDialogComponent } from '../patient/patient-register-dialog/patient-register-dialog.component';
import { PatientViewDialogComponent } from '../patient/patient-view-dialog/patient-view-dialog.component';
import { CreateMedicalExamsDialogComponent } from './create-medical-exams-dialog/create-medical-exams-dialog.component';
import { DeleteMedicalExamsDialogComponent } from './delete-medical-exams-dialog/delete-medical-exams-dialog.component';
import { EditMedicalExamsDialogComponent } from './edit-medical-exams-dialog/edit-medical-exams-dialog.component';
import { ViewMedicalExamsDialogComponent } from './view-medical-exams-dialog/view-medical-exams-dialog.component';

export interface PeriodicElement {
  name: string;
  schedule_date: string;
  exam_type: string;
  doctor_name: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    schedule_date: '24/07/2022 22:44',
    exam_type: 'Cardio',
    doctor_name: 'Dr. Paulo Gustavo',
  },
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
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
    'name',
    'schedule_date',
    'exam_type',
    'doctor_name',
    'actions',
  ];
  dataSource = ELEMENT_DATA;
  patient = {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    cpf: '101.234.673-45',
    schedule_date: '20/11/22',
    phone_number: '81 9 8456-1231',
    birthday_date: '23/02/2001',
    doctor_name: 'Dr Gaus',
    exam_type: 'Hemograma'
  };

  constructor(public matDialog: MatDialog) {}

  openCreateMedicalExamDialog(): void {
    this.matDialog.open(CreateMedicalExamsDialogComponent, {
      width: '600px',
      maxHeight:'600px'
    });
  }
  openEditMedicalExamDialog(): void {
    this.matDialog.open(EditMedicalExamsDialogComponent, {
      data: {
        edit: true,
        patient: this.patient,
      },
      width: '600px',
      height: '400px',
    });
  }
  openDeleteMedicalExamDialog(): void {
    this.matDialog.open(DeleteMedicalExamsDialogComponent, {
      data: {
        edit: true,
        patient: this.patient,
      },
      width: '600px',
      height: '400px',
    });
  }

  openViewMedicalExamDialog(): void {
    this.matDialog.open(ViewMedicalExamsDialogComponent, {
      width: '400px',
      height: '490px',
      data: {
        patient: this.patient,
      },
    });
  }

  ngOnInit(): void {}
}

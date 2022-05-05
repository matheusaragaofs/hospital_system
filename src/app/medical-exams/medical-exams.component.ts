import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { lastValueFrom } from 'rxjs';
import { PatientRegisterDialogComponent } from '../patient/patient-register-dialog/patient-register-dialog.component';
import { PatientViewDialogComponent } from '../patient/patient-view-dialog/patient-view-dialog.component';
import { CreateMedicalExamsDialogComponent } from './create-medical-exams-dialog/create-medical-exams-dialog.component';
import { DeleteMedicalExamsDialogComponent } from './delete-medical-exams-dialog/delete-medical-exams-dialog.component';
import { EditMedicalExamsDialogComponent } from './edit-medical-exams-dialog/edit-medical-exams-dialog.component';
import { MedicalExamsService } from './medical-exams.service';
import { ViewMedicalExamsDialogComponent } from './view-medical-exams-dialog/view-medical-exams-dialog.component';
import { MedicalExam } from 'src/types';
@Component({
  selector: 'app-medical-exams',
  templateUrl: './medical-exams.component.html',
  styleUrls: ['./medical-exams.component.sass'],
})
export class MedicalExamsComponent implements OnInit {
  displayedColumns: string[] = [
    'cpf',
    'name',
    'schedule_date',
    'exam_type',
    'doctor_name',
    'actions',
  ];
  dataSource: any = [];
  patient = {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    cpf: '101.234.673-45',
    schedule_date: '20/11/22',
    phone_number: '123213123123',
    birthday_date: '23/02/2001',
    doctor_name: 'Dr Gaus',
    exam_type: 'Hemograma',
  };

  constructor(public matDialog: MatDialog,
  private medicalExamsService: MedicalExamsService
    
    ) {}

    formatDate(date: string) {
      const formatedDate = date,
        [yyyy, mm, dd, hh, mi] = date.split(/[/:\-T]/);
      return `${dd}/${mm}/${yyyy} ${hh}:${mi}`;
    }

  openCreateMedicalExamDialog(): void {
    this.matDialog.open(CreateMedicalExamsDialogComponent, {
      width: '600px',
      maxHeight: '600px',
    });
  }
  openEditMedicalExamDialog(): void {
    this.matDialog.open(EditMedicalExamsDialogComponent, {
      data: {
        patient: this.patient,
      },
      width: '600px',
      height: '400px',
    });
  }
  openDeleteMedicalExamDialog(): void {
    this.matDialog.open(DeleteMedicalExamsDialogComponent, {
      data: {
        patient: this.patient,
      },
      width: '300px',
      height: '120px',
    });
  }

  openViewMedicalExamDialog(data: MedicalExam): void {
    this.matDialog.open(ViewMedicalExamsDialogComponent, {
      width: '400px',
      height: '490px',
      data
    });
  }
  async refreshData(): Promise<any> {
    try {
      await lastValueFrom(this.medicalExamsService.findAllExams()).then(
        (result: any) => {
          this.dataSource = result.body;
        }
      );
    } catch (err) {
      console.log('Erro ao listar os pacientes', err);
    }
  }

  ngOnInit(): void {
    this.refreshData();
  }
}

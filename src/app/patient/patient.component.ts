import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeletePatientWaitingListDialogComponent } from './delete-patient-waiting-list-dialog/delete-patient-waiting-list-dialog.component';
import { EditPatientWaitingListDialogComponent } from './edit-patient-waiting-list-dialog/edit-patient-waiting-list-dialog.component';
import { PatientRegisterDialogComponent } from './patient-register-dialog/patient-register-dialog.component';
import { PatientViewDialogComponent } from './patient-view-dialog/patient-view-dialog.component';

export interface PeriodicElement {
  name: string;
  cpf: string;
  priority: 'low' | 'medium' | 'high';
  isServed: boolean
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    cpf: '103.702.204-53',
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    priority: 'low',
    isServed: false
  },
  {
    cpf: '103.702.204-53',
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    priority: 'medium',
    isServed: true
  },
  {
    cpf: '103.702.204-53',
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    priority: 'low',
    isServed: false
  },
  {
    cpf: '103.702.204-53',
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    priority: 'medium',
    isServed: true
  },

];

@Component({
  selector: 'app-patients',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.sass'],
})
export class PatientComponent implements OnInit {
  displayedColumns: string[] = ['cpf', 'name', 'priority', 'served', 'actions'];
  dataSource = ELEMENT_DATA;
  patient = {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    cpf: '101.234.673-45',
    phone_number: '81 9 8214-2312',
    gender:'Masculino',
    cep:"2312312",
    address: 'Rua Santo Carmo 1',
    priority: 'high',
    birthday_date: '20/01/2001',
  };

  public isServed: boolean = false;

  onToggle(event: any): void {
    console.log(event)
  }
  constructor(public matDialog: MatDialog) { }

  openCreatePatientDialog(): void {
    this.matDialog.open(PatientRegisterDialogComponent, {
      width: '600px',
      maxHeight: '500px',
    });
  }
  openEditPatientDialog(): void {
    this.matDialog.open(EditPatientWaitingListDialogComponent, {
      data: {
        edit: true,
        patient: this.patient,
      },
      width: '800px',
    });
  }
  openDeletePatientDialog(): void {
    this.matDialog.open(DeletePatientWaitingListDialogComponent, {
      data: {
        edit: true,
        patient: this.patient,
      },
      width: '300px',
      height: '135px',
    });
  }

  openViewPatientDialog(): void {
    this.matDialog.open(PatientViewDialogComponent, {
      width: '600px',
      maxHeight: '500px',
      data: {
        patient: this.patient,
      },
    });
  }

  ngOnInit(): void { }
}

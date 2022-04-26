import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PatientRegisterDialogComponent } from './patient-register-dialog/patient-register-dialog.component';
import { PatientViewDialogComponent } from './patient-view-dialog/patient-view-dialog.component';

export interface PeriodicElement {
  name: string;
  cpf: string;
  priority: 'low' | 'medium' | 'high';
}
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    cpf: '103.702.204-53',
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    priority: 'low',
  },
  {
    cpf: '103.702.204-53',
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    priority: 'medium',
  },
  {
    cpf: '103.702.204-53',
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    priority: 'low',
  },
  {
    cpf: '103.702.204-53',
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    priority: 'medium',
  },
  {
    cpf: '103.702.204-53',
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    priority: 'low',
  },
  {
    cpf: '103.702.204-53',
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    priority: 'high',
  },
  {
    cpf: '103.702.204-53',
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    priority: 'low',
  },
  {
    cpf: '103.702.204-53',
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    priority: 'low',
  },
  {
    cpf: '103.702.204-53',
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    priority: 'low',
  },
  {
    cpf: '103.702.204-53',
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    priority: 'low',
  },
  {
    cpf: '103.702.204-53',
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    priority: 'low',
  },
  {
    cpf: '103.702.204-53',
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    priority: 'low',
  },
  {
    cpf: '103.702.204-53',
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    priority: 'low',
  },
  {
    cpf: '103.702.204-53',
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    priority: 'low',
  },
  {
    cpf: '103.702.204-53',
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    priority: 'low',
  },
  {
    cpf: '103.702.204-53',
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    priority: 'low',
  },
  {
    cpf: '103.702.204-53',
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    priority: 'low',
  },
  {
    cpf: '103.702.204-53',
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    priority: 'low',
  },
  {
    cpf: '103.702.204-53',
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    priority: 'low',
  },
];

@Component({
  selector: 'app-patients',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.sass'],
})
export class PatientComponent implements OnInit {
  displayedColumns: string[] = ['cpf', 'name', 'priority', 'actions'];
  dataSource = ELEMENT_DATA;
  patient = {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    cpf: '101.234.673-45',
    rg: '564456111',
    address: 'Rua Santo Carmo 1',
    complement: 'Atrás do Viaduto',
    health_insurance_id: '1',
    priority: 'high',
  };

  constructor(public matDialog: MatDialog) {}

  openCreatePatientDialog(): void {
    this.matDialog.open(PatientRegisterDialogComponent, {
      width: '800px',
      // height: '400px',
    });
  }
  openEditPatientDialog(): void {
    this.matDialog.open(PatientRegisterDialogComponent, {
      data: {
        edit: true,
        patient: this.patient,
      },
      width: '800px',
    });
  }

  openViewPatientDialog(): void {
    this.matDialog.open(PatientViewDialogComponent, {
      width: '600px',
      data: {
        patient: this.patient,
      },
    });
  }

  ngOnInit(): void {}
}

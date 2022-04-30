import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewPatientDialogComponent } from './view-patient-dialog/view-patient-dialog.component';
import { CreatePatientDialogComponent } from './create-patient-dialog/create-patient-dialog.component';
import { DeletePatientDialogComponent } from './delete-patient-dialog/delete-patient-dialog.component';
import { EditPatientDialogComponent } from './edit-patient-dialog/edit-patient-dialog.component';

export interface PeriodicElement {
  name: string;
  cpf: string;
  cep?: string;
  gender: 'male' | 'famale ' | 'other';
  address: string;
  birthday_date: string;
  phone_number: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    cpf: '103.702.204-53',
    cep: '51160213',
    gender: 'male',
    phone_number: '81 9 8214-2312',
    address: 'Rua Santo Carmo 1',
    birthday_date: '20/01/2001',

  },
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    cpf: '103.702.204-53',
    gender: 'male',
    phone_number: '81 9 8214-2312',
    address: 'Rua Santo Carmo 1',
    birthday_date: '20/01/2001',

  },
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    cpf: '103.702.204-53',
    gender: 'male',
    phone_number: '81 9 8214-2312',
    address: 'Rua Santo Carmo 1',
    birthday_date: '20/01/2001',

  },
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    cpf: '103.702.204-53',
    gender: 'male',
    phone_number: '81 9 8214-2312',
    address: 'Rua Santo Carmo 1',
    birthday_date: '20/01/2001',

  },
];

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.sass'],
})
export class PatientsListComponent implements OnInit {
  displayedColumns: string[] = ['cpf', 'name', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor(public matDialog: MatDialog) { }
  ngOnInit(): void { }

  openCreatePatientDialog(): void {
    this.matDialog.open(CreatePatientDialogComponent, {
      width: '600px',
      maxHeight: '500px',
    });
  }
  openEditPatientDialog(): void {
    this.matDialog.open(EditPatientDialogComponent, {
      width: '600px',
      maxHeight: '500px',
    });
  }
  openDeletePatientDialog(): void {
    this.matDialog.open(DeletePatientDialogComponent, {
      width: '300px',
      height: '135px',
    });
  }

  openViewPatientDialog(): void {
    this.matDialog.open(ViewPatientDialogComponent, {
      width: '600px',
      maxHeight: '500px',
    });
  }
}

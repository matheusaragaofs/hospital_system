import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewPatientDialogComponent } from './view-patient-dialog/view-patient-dialog.component';
import { CreatePatientDialogComponent } from './create-patient-dialog/create-patient-dialog.component';
import { DeletePatientDialogComponent } from './delete-patient-dialog/delete-patient-dialog.component';
import { EditPatientDialogComponent } from './edit-patient-dialog/edit-patient-dialog.component';
import { PatientsListService } from './patients-list.service';
import { lastValueFrom, Observable } from 'rxjs';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
export interface PeriodicElement {
  name: string;
  cpf: string;
  cep?: string;
  gender: string;
  address: string;
  birthday_date: string;
  health_insurance_id: string;
  phone_number: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    cpf: '103.702.204-53',
    gender: 'Masculin',
    phone_number: '81 9 8214-2312',
    address: 'Rua Santo Carmo 1',
    birthday_date: '20/01/2001',
    health_insurance_id: '1',
  },
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    cpf: '103.702.204-53',
    gender: 'Masculin',
    phone_number: '81 9 8214-2312',
    address: 'Rua Santo Carmo 1',
    birthday_date: '20/01/2001',
    health_insurance_id: '1',
  },
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    cpf: '103.702.204-53',
    gender: 'Masculin',
    phone_number: '81 9 8214-2312',
    address: 'Rua Santo Carmo 1',
    birthday_date: '20/01/2001',
    health_insurance_id: '1',
  },
  {
    name: 'JORGE AUGUSTO ALMEIDA FILHO',
    cpf: '103.702.204-53',
    gender: 'Masculin',
    phone_number: '81 9 8214-2312',
    address: 'Rua Santo Carmo 1',
    birthday_date: '20/01/2001',
    health_insurance_id: '1',
  },
];

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.sass'],
})
export class PatientsListComponent implements OnInit {
  constructor(
    public matDialog: MatDialog,
    private patientsListService: PatientsListService
  ) {}
  displayedColumns: string[] = ['cpf', 'name', 'actions'];
  dataSource: any = [];
  searchError: string = '';
  public patientFound:boolean = false;
  public searchByCpf: string = '';

  async refreshData(): Promise<any> {
    try {
      await lastValueFrom(this.patientsListService.findAllPatients()).then(
        (result) => {
          this.dataSource = result.body;
        }
      );
    } catch (err) {
      console.log('Erro ao listar os pacientes', err);
    }
  }

  cleanSearch(): void {
    this.searchByCpf = '';
    this.refreshData();
    this.patientFound = false;
  }

  async searchPatientByCpf(): Promise<any> {
    console.log(this.searchByCpf);
    if (this.searchByCpf.length === 0 || this.searchByCpf.length < 11)
      return (this.searchError = 'Digite um Cpf válido');

    try {
      await lastValueFrom(
        this.patientsListService.findPatientByCpf({ cpf: this.searchByCpf })
      ).then((result) => {
         this.patientFound = true;
        return (this.dataSource = [result.body]);
      });
    } catch (err) {
      console.log('error aqui entrou');
      return (this.searchError = 'Paciente não encontrado, tente outro Cpf...');
    }
  }

  ngOnInit(): void {
    this.refreshData();
  }

  openCreatePatientDialog(): any {
    const dialogRef = this.matDialog.open(CreatePatientDialogComponent, {
      width: '600px',
      maxHeight: '500px',
    });

    dialogRef.afterClosed().subscribe(() => this.refreshData());
  }

  openEditPatientDialog(): void {
    const dialogRef =  this.matDialog.open(EditPatientDialogComponent, {
      width: '600px',
      maxHeight: '500px',
    });
    dialogRef.afterClosed().subscribe(() => this.refreshData());

  }
  openDeletePatientDialog({ cpf }: { cpf: string }): void {
    const dialogRef =this.matDialog.open(DeletePatientDialogComponent, {
      data: {
        cpf,
      },
      width: '300px',
      height: '170px',
    });
    dialogRef.afterClosed().subscribe(() => this.refreshData());

  }

  openViewPatientDialog(data: any): void {
    this.matDialog.open(ViewPatientDialogComponent, {
      data,
      width: '600px',
      maxHeight: '500px',
    });
  }
}
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewPatientDialogComponent } from './view-patient-dialog/view-patient-dialog.component';
import { CreatePatientDialogComponent } from './create-patient-dialog/create-patient-dialog.component';
import { DeletePatientDialogComponent } from './delete-patient-dialog/delete-patient-dialog.component';
import { EditPatientDialogComponent } from './edit-patient-dialog/edit-patient-dialog.component';
import { PatientsListService } from './patients-list.service';
import { lastValueFrom, Observable } from 'rxjs';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
export interface Patient {
  name: string;
  cpf: string;
  cep?: string;
  gender: string;
  address: string;
  date_of_birth: string;
  phone_number: string;
}

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
  displayedColumns: string[] = ['cpf', 'name', 'date_of_birth', 'actions'];
  dataSource: any = [];
  searchError: string = '';
  public patientFound: boolean = false;
  public searchByCpf: string = '';

  formatDate(date: string) {
    const formatedDate = date,
      [yyyy, mm, dd, hh, mi] = date.split(/[/:\-T]/);
    return `${dd}/${mm}/${yyyy}`;
  }

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
      width: '700px',
      maxHeight: '500px',
    });

    dialogRef.afterClosed().subscribe(() => this.refreshData());
  }

  openEditPatientDialog(patient: Patient): void {
    const dialogRef = this.matDialog.open(EditPatientDialogComponent, {
      width: '600px',
      maxHeight: '500px',
      data: patient,
    });
    dialogRef.afterClosed().subscribe(() => this.refreshData());
  }
  openDeletePatientDialog({ cpf }: { cpf: string }): void {
    const dialogRef = this.matDialog.open(DeletePatientDialogComponent, {
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

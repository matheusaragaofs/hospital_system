import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { FormControl, Validators } from '@angular/forms';
import { PatientService } from 'src/app/patient.service';
import { PatientsService } from '../patients.service';
import { firstValueFrom, lastValueFrom } from 'rxjs';
type PriorityOptions = { label: string; value: number };

@Component({
  selector: 'patient-register-dialog',
  templateUrl: './patient-register-dialog.component.html',
  styleUrls: ['./patient-register-dialog.component.sass'],
})
export class PatientRegisterDialogComponent implements OnInit {
  public patient: any = false;
  public errors: any = {
    patientAlreadyExist: '',
    patientNotFound: '',
  };
  constructor(
    public dialogRef: MatDialogRef<PatientRegisterDialogComponent>,
    public patientService: PatientService,
    private patientsService: PatientsService
  ) {}

  public errorMessage: string | undefined = '';
  public priority!: number;
  public showPatientInfo: boolean = false;
  public cpf = new FormControl('', [
    Validators.required,
    Validators.minLength(11),
    Validators.maxLength(11),
  ]);

  formatDate(date: string) {
    const formatedDate = date,
      [yyyy, mm, dd, hh, mi] = date.split(/[/:\-T]/);
    return `${dd}/${mm}/${yyyy}`;
  }

  getErrorMessage() {
    if (this.cpf.hasError('required')) {
      return 'CPF obrigatório.';
    }
    return 'Não é um CPF válido';
  }

  keyPressNumbers(event: any) {
    this.errors = {};
    var charCode = event.which ? event.which : event.keyCode;
    // Only Numbers 0-9
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

  public priorityOptions: PriorityOptions[] = [
    { label: 'Alta', value: 2 },
    { label: 'Média', value: 1 },
    { label: 'Baixa', value: 0 },
  ];

  getPrioritySelected(event: MatSelectChange): void {
    this.priority = event.value;
  }

  async onSubmit(): Promise<any> {
    const { cpf, priority } = this;
    const response = await this.patientService.addPatient({
      cpf: cpf.value,
      priority,
    });

    if (response.data) {
      console.log('response.data', response.data);
    }
    console.log(response.error);
    window.location.reload()
  }

  async findPatientByCpf(): Promise<any> {
    const { cpf } = this;

    let patientFound: any = '';
    let patientInWaitingList: any = '';

    try {
      await lastValueFrom(
        this.patientsService.findPatientRegisterByCpf(cpf.value)
      ).then((result) => (patientFound = result.body));
    } catch (error) {
      this.errors.patientNotFound = '';
    }

    try {
      await lastValueFrom(
        this.patientsService.findPatientByCpf(cpf.value)
      ).then((result) => (patientInWaitingList = result.body));
    } catch (error) {
      this.errors.patientAlreadyExist = '';
    }

    if (patientFound && patientInWaitingList) {
      console.log('entrou aqui no patient ja existe');
      this.errors.patientNotFound = '';
      this.errors.patientAlreadyExist = 'Paciente já existe';
      return (this.showPatientInfo = false);
    }

    if (!patientFound) {
      this.errors.patientAlreadyExist = '';
      this.errors.patientNotFound = 'Paciente não encontrado';
      return (this.showPatientInfo = false);
    }

    if (patientFound && !patientInWaitingList) {
      console.log('ENTROU AQUI', patientFound)
      this.showPatientInfo= true
      return (this.patient = patientFound);
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}

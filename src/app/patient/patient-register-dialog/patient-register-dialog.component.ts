import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { FormControl, Validators } from '@angular/forms';
import { PatientService } from 'src/app/patient.service';

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
  }

  constructor(
    public dialogRef: MatDialogRef<PatientRegisterDialogComponent>,
    public patientService: PatientService
  ) {}

  async findPatientByCpf(): Promise<any> {
    const { cpf } = this;

    const patientInWaitingList =
      await this.patientService.checkPatientInWaitingList({ cpf: cpf.value });

    const patiendFound = await this.patientService.getPatient({
      cpf: cpf.value,
    });

    if (patiendFound.data && patientInWaitingList.exist) {
      this.showPatientInfo = false;

      return (this.errors.patientAlreadyExist = patientInWaitingList.message);
    }

    if (patiendFound.error) {
      this.showPatientInfo = false;

      return (this.errors.patientNotFound = patiendFound.message);
    }

    if (patiendFound.data && !patientInWaitingList.exist) {
      this.showPatientInfo = true;
      return (this.patient = patiendFound.data);
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}

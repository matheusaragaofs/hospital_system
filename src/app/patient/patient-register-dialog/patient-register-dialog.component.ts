import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { FormControl, Validators } from '@angular/forms';

type PriorityOptions = { label: string; value: 'high' | 'medium' | 'low' };

@Component({
  selector: 'patient-register-dialog',
  templateUrl: './patient-register-dialog.component.html',
  styleUrls: ['./patient-register-dialog.component.sass'],
})
export class PatientRegisterDialogComponent implements OnInit {
  public name = '';
  // public cpf = '';
  public address = '';
  public cep = '';
  public health_insurance_id = '';
  public priority = {};

  public cpf = new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]);

  getErrorMessage() {
    if (this.cpf.hasError('required')) {
      return 'CPF obrigatório.';
    }
    return 'Não é um CPF válido';
  }



  public priorityOptions: PriorityOptions[] = [
    { label: 'Alta', value: 'high' },
    { label: 'Média', value: 'medium' },
    { label: 'Baixa', value: 'low' },
  ];

  getPrioritySelected(event: MatSelectChange): void {
    this.priority = event.value;
  }

  onSubmit(): void {
    const { name, cpf, address, cep, health_insurance_id, priority } =
      this;

    const registerData = {
      name,
      cpf,
      address,
      cep,
      health_insurance_id,
      priority,
    };

    console.log(registerData);
  }

  constructor(
    public dialogRef: MatDialogRef<PatientRegisterDialogComponent> // @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  public patientFound = false;
  togglePatientFound() {
    if (this.cpf.valid) return this.patientFound = true
    return this.patientFound = false
  }


  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void { }
}

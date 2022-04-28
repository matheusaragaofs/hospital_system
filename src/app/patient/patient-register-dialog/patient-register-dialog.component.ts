import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';

type PriorityOptions = { label: string; value: 'high' | 'medium' | 'low' };

@Component({
  selector: 'patient-register-dialog',
  templateUrl: './patient-register-dialog.component.html',
  styleUrls: ['./patient-register-dialog.component.sass'],
})
export class PatientRegisterDialogComponent implements OnInit {
  public name = '';
  public cpf = '';
  public rg = '';
  public address = '';
  public complement = '';
  public cep = '';
  public health_insurance_id = '';
  public priority = {};
  public age: number = 0;

  public priorityOptions: PriorityOptions[] = [
    { label: 'Alta', value: 'high' },
    { label: 'Média', value: 'medium' },
    { label: 'Baixa', value: 'low' },
  ];

  getPrioritySelected(event: MatSelectChange): void {
    this.priority = event.value;
  }

  onSubmit(): void {
    const { name, cpf, rg, address, cep, health_insurance_id, priority, age } =
      this;

    const registerData = {
      name,
      cpf,
      rg,
      address,
      cep,
      health_insurance_id,
      priority,
      age,
    };

    console.log(registerData);
  }

  constructor(
    public dialogRef: MatDialogRef<PatientRegisterDialogComponent> // @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}

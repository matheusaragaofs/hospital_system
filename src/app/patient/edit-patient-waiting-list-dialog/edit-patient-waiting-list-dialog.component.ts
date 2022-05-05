import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { PatientRegisterDialogComponent } from '../patient-register-dialog/patient-register-dialog.component';


type PriorityOptions = { label: string; value: 'high' | 'medium' | 'low' };


@Component({
  selector: 'app-edit-patient-waiting-list-dialog',
  templateUrl: './edit-patient-waiting-list-dialog.component.html',
  styleUrls: ['./edit-patient-waiting-list-dialog.component.sass']
})
export class EditPatientWaitingListDialogComponent implements OnInit {
  public name = '';
  public cpf = '';
  public address = '';
  public cep = '';
  public health_insurance_id = '';
  public priority = {};

  public priorityOptions: PriorityOptions[] = [
    { label: 'Alta', value: 'high' },
    { label: 'Média', value: 'medium' },
    { label: 'Baixa', value: 'low' },
  ];
  constructor(
    public dialogRef: MatDialogRef<PatientRegisterDialogComponent> // @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }
  onSubmit(): void {
    const { name, cpf, address, cep, health_insurance_id, priority  } =
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


  getPrioritySelected(event: MatSelectChange): void {
    this.priority = event.value;
  }
  
  closeDialog(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}

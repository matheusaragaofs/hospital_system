import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'patient-register-dialog',
  templateUrl: './patient-register-dialog.component.html',
  styleUrls: ['./patient-register-dialog.component.sass']
})
export class PatientRegisterDialogComponent implements OnInit {
  public name = '';
  public cpf = '';
  public rg = '';
  public address = '';
  public complement = '';
  public cep = '';
  public health_insurance_id = '';


  onSubmit(): void {
    const { name, cpf, rg, address, cep, health_insurance_id} = this;

    const registerData = { 
      name,
      cpf,
      rg,
      address,
      cep,
      health_insurance_id
    }

    console.log(registerData)
  }
  
  constructor(
    public dialogRef: MatDialogRef<PatientRegisterDialogComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {}
    
    closeDialog(): void {
      this.dialogRef.close()
  
    }
      
  ngOnInit(): void {
  }
 
}

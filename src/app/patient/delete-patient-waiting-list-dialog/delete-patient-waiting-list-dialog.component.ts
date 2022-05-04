import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-delete-patient-waiting-list-dialog',
  templateUrl: './delete-patient-waiting-list-dialog.component.html',
  styleUrls: ['./delete-patient-waiting-list-dialog.component.sass'],
})
export class DeletePatientWaitingListDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private patientsService: PatientsService,
    public dialogRef: MatDialogRef<DeletePatientWaitingListDialogComponent> // @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  public cpf = this.data.cpf;
  deletePatient(): void {
    this.patientsService.deletePatient(this.cpf).subscribe(
      (data: Response) => console.log('Usuário deletado com sucecsso!'),
      (err: any) => console.log('Erro ao listar os pacientes', err)
    );
    window.location.reload();

  }

  ngOnInit(): void {}
  closeDialog(): void {
    this.dialogRef.close();
  }
}

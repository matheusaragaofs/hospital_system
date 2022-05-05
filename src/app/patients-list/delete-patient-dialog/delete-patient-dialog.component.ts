import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PatientsListService } from '../patients-list.service';

@Component({
  selector: 'app-delete-patient-dialog',
  templateUrl: './delete-patient-dialog.component.html',
  styleUrls: ['./delete-patient-dialog.component.sass'],
})
export class DeletePatientDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private patientsService: PatientsListService,
    public dialogRef: MatDialogRef<DeletePatientDialogComponent> // @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  public cpf = this.data.cpf;

  deletePatient(): void {
    this.patientsService.deletePatient({cpf: this.cpf}).subscribe(
      (data: Response) => console.log('Usuário deletado com sucecsso!'),
      (err: any) => console.log('Erro ao deletar paciente', err)
    );
    this.closeDialog()
  }

  ngOnInit(): void {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}

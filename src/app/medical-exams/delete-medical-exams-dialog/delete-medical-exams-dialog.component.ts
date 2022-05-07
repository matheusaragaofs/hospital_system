import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MedicalExamsService } from '../medical-exams.service';

@Component({
  selector: 'app-delete-medical-exams-dialog',
  templateUrl: './delete-medical-exams-dialog.component.html',
  styleUrls: ['./delete-medical-exams-dialog.component.sass'],
})
export class DeleteMedicalExamsDialogComponent implements OnInit {
  ngOnInit(): void {}
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { cpf: string },
    private medicalExamsService: MedicalExamsService,
    public dialogRef: MatDialogRef<DeleteMedicalExamsDialogComponent>
  ) {}

  public cpf = this.data.cpf;
  deletePatient(): void {
    this.medicalExamsService.deleteExamAppointment({ cpf: this.cpf }).subscribe(
      (data: Response) => console.log('Usuário deletado com sucecsso!'),
      (err: any) => console.log('Erro ao deletar o paciente', err)
    );
      this.closeDialog()
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { MedicalExam } from 'src/types';
import { formatDate } from '../../utils/formatDate';
@Component({
  selector: 'app-edit-medical-exams-dialog',
  templateUrl: './edit-medical-exams-dialog.component.html',
  styleUrls: ['./edit-medical-exams-dialog.component.sass'],
})
export class EditMedicalExamsDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: MedicalExam,
    public dialogRef: MatDialogRef<EditMedicalExamsDialogComponent>
  ) {}
  public name = this.data.patient.name;
  public cpf = this.data.patient_cpf;
  public exam = this.data.exam;
  public doctor_name = this.data.doctor_name;
  public phone_number = this.data.patient.phone_number;
  public date_of_birth = formatDate({
    date: this.data.patient.date_of_birth,
    showTime: true,
  });
  public scheduled_at = this.data.scheduled_at

  public scheduledDate: string = '';
  public patientFound: boolean = false;

  public exams: { label: string; id: string }[] = [
    {
      label: 'Raio X',
      id: '1',
    },
    {
      label: 'Tomografia',
      id: '2',
    },
    {
      label: 'Hemograma',
      id: '3',
    },
    {
      label: 'Eletrocardiograma',
      id: '4',
    },
  ];
  public doctors: { label: string; id: string }[] = [
    {
      label: 'Dr. Miguel Arraes',
      id: '1212121',
    },
    {
      label: 'Dra. Priscila Senna',
      id: '21313123',
    },
    {
      label: 'Dra. Raphaela sANTOS',
      id: '123123123',
    },
    {
      label: 'Dr. Irineu',
      id: '1231231',
    },
  ];

  setSelectedExam(event: MatSelectChange): void {
    this.exam = event.value;
  }
  setSelectedDoctorId(event: MatSelectChange): void {
    this.doctor_name = event.value;
  }
  ngOnInit(): void {}

  onSubmit(): void {
    const { scheduledDate, exam, doctor_name} = this;

    const registerData = {
      exam,
      doctor_name,
      scheduledDate,
    };

    console.log(registerData);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}

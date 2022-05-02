import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { MedicalExamsComponent } from '../medical-exams.component';

@Component({
  selector: 'app-create-medical-exams-dialog',
  templateUrl: './create-medical-exams-dialog.component.html',
  styleUrls: ['./create-medical-exams-dialog.component.sass'],
})
export class CreateMedicalExamsDialogComponent implements OnInit {
  public selectedExamId: string = '';
  public selectedDoctorId: string = '';
  public scheduledDate: string = '';
  public patientName: string = '';
  public patientFound: boolean = false;
  public exams: { label: string; id: string }[] = [
    {
      label: 'Raio X',
      id: 'x_ray',
    },
    {
      label: 'Tomografia',
      id: 'tomography',
    },
    {
      label: 'Hemograma',
      id: 'blood_count',
    },
    {
      label: 'Eletrocardiograma',
      id: 'electrocardiogram',
    },
  ];
  public doctors: { [key: string]: { label: string; id: number }[] } = {
    x_ray: [
      {
        label: 'Dra. Tatiana Noronha',
        id: 1,
      },
      {
        label: 'Dr. Jair Malta ',
        id: 2,
      },
      {
        label: 'Dra. Celeste Bessa ',
        id: 3,
      },
    ],
    tomography: [
      {
        label: 'Dra. Gina Cedraz',
        id: 4,
      },
      {
        label: 'Dr. Marcelino  Abelho ',
        id: 5,
      },
      {
        label: 'Dra. Emily  Zagalo',
        id: 6,
      },
    ],
    blood_count: [
      {
        label: 'Dra. Céline Ramires ',
        id: 7,
      },
      {
        label: 'Dra. Ana Catarina ',
        id: 8,
      },
      {
        label: 'Dra. Branca Marques ',
        id: 9
      },
    ],
    electrocardiogram: [
      {
        label: 'Taíssa Naves ',
        id: 10,
      },
      {
        label: 'Stella Remígio ',
        id: 11,
      },
      {
        label: 'Renata Lameiras',
        id: 12,
      },
    ],
  };

  public cpf: string = '';
  onSubmit(): void {
    const { scheduledDate, selectedExamId, patientName, selectedDoctorId } =
      this;

    const registerData = {
      patientName,
      selectedExamId,
      selectedDoctorId,
      scheduledDate,
    };

    console.log(registerData);
  }

  togglePatientFound() {
    this.patientFound = !this.patientFound;
  }

  setSelectedExam(event: MatSelectChange): void {
    this.selectedExamId = event.value;
  }
  setSelectedDoctorId(event: MatSelectChange): void {
    this.selectedDoctorId = event.value;
  }

  constructor(
    public dialogRef: MatDialogRef<CreateMedicalExamsDialogComponent> // @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}

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
  public patientName: string = ''
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
  public doctors2 = { 
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
    tomography:[
      {
      label: 'Dra. Priscila Almeida',
      id: 4,
       },
      {
      label: 'Dr. Denilson  Abelho ',
      id: 5,
       },
      {
      label: 'Dra. Emily  Zagalo',
      id: 6,
       }
  ],
  blood_count:[
    {
      label: 'Dra. Céline Ramires ',
      id: 7,
    },
    {
      label: 'Dra. Ana Catarina ',
      id: 8,
    }
  ]
  }
  
  
  
  
  
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
  public cpf: string = '';
  onSubmit(): void {
    const { scheduledDate, selectedExamId, patientName, selectedDoctorId} = this;
  
    const registerData = {
     patientName,
     selectedExamId,
     selectedDoctorId,
     scheduledDate
    };

    console.log(registerData);
  }

  togglePatientFound() {
    this.patientFound = !this.patientFound
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

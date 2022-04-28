import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMedicalExamsDialogComponent } from './edit-medical-exams-dialog.component';

describe('EditMedicalExamsDialogComponent', () => {
  let component: EditMedicalExamsDialogComponent;
  let fixture: ComponentFixture<EditMedicalExamsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMedicalExamsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMedicalExamsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

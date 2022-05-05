import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPatientWaitingListDialogComponent } from './edit-patient-waiting-list-dialog.component';

describe('EditPatientWaitingListDialogComponent', () => {
  let component: EditPatientWaitingListDialogComponent;
  let fixture: ComponentFixture<EditPatientWaitingListDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPatientWaitingListDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPatientWaitingListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

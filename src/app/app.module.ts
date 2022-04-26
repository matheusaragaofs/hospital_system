import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import { ReportsComponent } from './reports/reports.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { PatientRegisterDialogComponent } from './patient/patient-register-dialog/patient-register-dialog.component';
import {  MatDialogModule } from '@angular/material/dialog';
import { PatientViewDialogComponent } from './patient/patient-view-dialog/patient-view-dialog.component';
import { MedicalExamsComponent } from './medical-exams/medical-exams.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PatientComponent,
    ReportsComponent,
    LoginComponent,
    ProfileComponent,
    PatientRegisterDialogComponent,
    PatientViewDialogComponent,
    MedicalExamsComponent
  ],
  entryComponents: [PatientRegisterDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    // MatDialog,
    // MatDialogRef,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    PatientRegisterDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

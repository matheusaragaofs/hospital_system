import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BrokerBackendService } from '../broker-backend.service';

@Injectable({
  providedIn: 'root',
})
export class MedicalExamsService {
  constructor(private brokerBackend: BrokerBackendService) {}

  apiUrl = environment.apiBaseUrl;
  relativeUrl = '/exams';
  url = this.apiUrl + this.relativeUrl;

  getSimpleHeader() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  findAllExams(): Observable<any> {
    return this.brokerBackend.request({
      httpMethod: 'GET',
      relativeUrl: this.relativeUrl,
      headers: this.getSimpleHeader(),
    });
  }
  findExamByPatientCpf({cpf}: {cpf: string}): Observable<any> {
    return this.brokerBackend.request({
      httpMethod: 'GET',
      relativeUrl: `${this.relativeUrl}/${cpf}`,
      headers: this.getSimpleHeader(),
    });
  }

  

  deleteExamAppointment({ cpf }: { cpf: string }): Observable<any> {
    return this.brokerBackend.request({
      httpMethod: 'DELETE',
      relativeUrl: `${this.relativeUrl}/${cpf}`,
      headers: this.getSimpleHeader(),
    });
  }
}

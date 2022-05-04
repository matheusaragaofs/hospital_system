import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrokerBackendService } from '../broker-backend.service';

interface Patient {
  name: string;
  cpf: string;
  address: string;
  date_of_birth: string;
  cep: string;
  gender: string;
  phone_number: string;
}
@Injectable({
  providedIn: 'root',
})
export class PatientsListService {
  constructor(private brokerBackend: BrokerBackendService) {}
  relativeUrl = '/patients';

  getSimpleHeader() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  findAllPatients(): Observable<any> {
    return this.brokerBackend.request({
      httpMethod: 'GET',
      relativeUrl: this.relativeUrl,
      headers: this.getSimpleHeader(),
    });
  }

  deletePatient({ cpf }: { cpf: string }): Observable<any> {
    return this.brokerBackend.request({
      httpMethod: 'DELETE',
      relativeUrl: `${this.relativeUrl}/${cpf}`,
      headers: this.getSimpleHeader(),
    });
  }

  addPatient(body: Patient): Observable<any> {
    return this.brokerBackend.request({
      httpMethod: 'POST',
      body: {
        name: 'Test Amazonas F.',
        date_of_birth: '1013904000000',
        phone_number: '87999998888',
        cpf: '10319212149',
        cep: '50555-555',
        address: 'Rua dos Passistas',
        gender: 'male',
      },
      relativeUrl: this.relativeUrl,
      headers: this.getSimpleHeader(),
    });
  }
}

import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrokerBackendService } from '../broker-backend.service';

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
}

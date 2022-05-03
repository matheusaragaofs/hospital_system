import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { BrokerBackendService } from '../broker-backend.service';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  relativeUrl = '/waiting-list';

  constructor(private brokerBackend: BrokerBackendService) { }

  findAllPatients(): Observable<any> {
    return this.brokerBackend.request({
      httpMethod: 'GET',
      relativeUrl: this.relativeUrl,
      headers: this.getSimpleHeader()
    });
  };

  getSimpleHeader() {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  };
}

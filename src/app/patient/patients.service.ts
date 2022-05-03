import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { BrokerBackendService } from '../broker-backend.service';

type findAllPatientsParams = {
  priority?: number;
};
@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  relativeUrl = '/waiting-list';

  constructor(private brokerBackend: BrokerBackendService) {}

  findAllPatients(params: any): Observable<any> {
    return this.brokerBackend.request({
      httpMethod: 'GET',
      params,
      relativeUrl: this.relativeUrl,
      headers: this.getSimpleHeader(),
    });
  }

  getSimpleHeader() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }
}

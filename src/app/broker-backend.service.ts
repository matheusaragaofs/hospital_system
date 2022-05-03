import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpRequest,
  HttpParams,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../environments/environment';

interface IRequest {
  httpMethod: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  relativeUrl: string;
  headers?: HttpHeaders;
  body?: any;
  params?: HttpParams | any;
}

@Injectable({
  providedIn: 'root',
})
export class BrokerBackendService {
  constructor(private http: HttpClient) {}

  request({
    httpMethod,
    relativeUrl,
    headers,
    body,
    params,
  }: IRequest): Observable<any> {
    const url = environment.apiBaseUrl + relativeUrl;
    let parameters = {filter: 1};
    console.log('parameters', parameters)
    console.log('params???',params )
    let queryParams = new HttpParams({ fromObject: params });

    return this.http
      .request(
        new HttpRequest(httpMethod, url, {
          headers,
          params: queryParams,
          body,
        })
      )
      .pipe(map((response) => response));
  }
}

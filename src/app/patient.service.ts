import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
interface Response {
  data?: any;
  message?: string;
  error: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private http: HttpClient) {}
  api_url: string = 'http://localhost:3333';

  testeGETPatient(): void {
    this.http
      .get<any>('http://127.0.0.1:3333/waiting-list')
      .subscribe((data) => {
        console.log(data);
      });
  }

  async addPatient({
    cpf,
    priority,
  }: {
    cpf: string;
    priority: number;
  }): Promise<Response> {
    return await axios
      .post(`http://localhost:3333/waiting-list`, {
        cpf,
        priority,
      })
      .then((res) => {
        return {
          data:res.data,
          message: 'Adição feita com sucesso',
          error: false,
        };
      })
      .catch((err) => {
        return {
          message: 'Adição não foi realizada com sucesso',
          error: true,
        };
      });
  }

  editPatient({ cpf, attended }: { cpf: number; attended: boolean }): void {
    axios
      .put(`${this.api_url}/${cpf}`, {
        attended,
      })
      .then((res) => {
        return {
          error: null,
        };
      })
      .catch((err) => {
        return {
          error: true,
        };
      });
  }

  deletePatient({ cpf }: { cpf: number }): void {
    axios
      .delete(`${this.api_url}/${cpf}`)
      .then((res) => {
        return {
          error: null,
          message: 'Deleção realizada com sucesso',
        };
      })
      .catch((err) => {
        return {
          error: true,
          message: 'Falha na deleção.',
        };
      });
  }

  async getPatients({
    cpf,
    priority,
  }: {
    cpf?: number;
    priority?: number;
  }): Promise<Response> {
    return await axios
      .get(`${this.api_url}/waiting-list`, {})
      .then((res) => {
        return {
          data: res.data,
          error: false,
        };
      })
      .catch((err) => {
        return {
          error: err,
        };
      });
  }

  async getPatient({ cpf }: { cpf: string }): Promise<Response> {
    return await axios
      .get(`http://localhost:3333/patients/${cpf}`)
      .then((res) => {
        return {
          data: res.data,
          error: false,
        };
      })
      .catch((err) => {
        return {
          message: 'Paciente não encontrado',
          error: true,
        };
      });
  }
  async checkPatientInWaitingList({ cpf }: { cpf: string }): Promise<Response | any> {
    return await axios
      .get(`http://localhost:3333/waiting-list/${cpf}`)
      .then((res) => {
        return {
          message: 'Paciente já cadastrado na fila de espera',
          exist: true,
        };
      })
      .catch((err) => {
        return {
          exist: false
        };
      });
  }
}

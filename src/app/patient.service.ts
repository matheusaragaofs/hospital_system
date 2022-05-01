import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  public patients = []
  url: string = 'https://pokeapi.co/api/v2/pokemon/ditto'

  addPatient(data: any): void {
    axios.post(this.url, {
      cpf: data.cpf,
      priority: data.priority

    })
  }

  editPatient(data: any): void {
    axios.put(`${this.url}/${data.id}`, {
      priority: data.priority
    })
  }
  
  deletePatient(data: any): void {
    axios.delete(`${this.url}/${data.id}`)
  }
  
  toggleServedPatient(data: any): void {
    axios.put(`${this.url}/${data.id}`, {
      served: data.served
    })
  }

  getPatients(data?: any): void {
    axios.get(this.url, {params: {filterByCpf: data?.cpf, priority: data?.priority}}).then(res => {
      console.log('data', res)
    }).catch((err) => {
      console.log('err', err)
    })
    console.log('fetchando')
  }

  getPatient(data:any): void {
    axios.get(`${this.url}/${data.id}`).then(res => {
      console.log('data', res)
    }).catch((err) => {
      console.log('err', err)
    })
    console.log('fetchando')
  }

  constructor() { }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseUrl = "http://localhost:8080/api/v1";

  constructor(private httpClient: HttpClient) { }

  getPatients(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.baseUrl}/list`);
  }
  deletePatient(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseUrl}/patient/delete/${id}`);
  }

}
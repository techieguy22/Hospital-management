import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from './appointment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseUrl = "http://localhost:8080/api/v3";

  constructor(private httpClient: HttpClient) { }

  getAppointments(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(`${this.baseUrl}/list`);
  }
  createAppointments(appointment: Appointment): Observable<Appointment> {
    return this.httpClient.post<Appointment>(`${this.baseUrl}/insert`, appointment);
  }
  deleteAppointment(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseUrl}/appointments/${id}`);
  }

}


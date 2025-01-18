import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicine } from './medicine';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  private baseUrl = "http://localhost:8080/api/v2";

  constructor(private httpClient: HttpClient) { }

  getMedicines(): Observable<Medicine[]> {
    return this.httpClient.get<Medicine[]>(`${this.baseUrl}/list`);
  }
  createMedicines(medicine: Medicine): Observable<Medicine> {
    return this.httpClient.post<Medicine>(`${this.baseUrl}/insert`, medicine);
  }

  deleteMedicine(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseUrl}/medicine/delete/${id}`);
  }
  getMedicineById(id:number):Observable<Medicine>{
    return this.httpClient.get<Medicine>(`${this.baseUrl}/medicine/${id}`);
  }
  updateMedicine(id:number,medicine:Medicine):Observable<Medicine>{
    return this.httpClient.put<Medicine>(`${this.baseUrl}/medicine/update/${id}`,medicine);
  }

}

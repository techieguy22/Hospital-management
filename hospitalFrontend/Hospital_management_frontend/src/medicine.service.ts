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

  deleteMedicine(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseUrl}/medicine/delete/${id}`);
  }

}

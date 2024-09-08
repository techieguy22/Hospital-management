import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  patients: Patient[] =[];
  constructor(private patientService: PatientService) {
    
  }

  ngOnInit(): void {
    this.getPatients();    
  }
  getPatients() {
    console.log(1);
    this.patientService.getPatients().subscribe((data) => {
      this.patients = data;
      console.log(3,data);
    });
  }
  delete(id:number){
    console.log("deleted");
    this.patientService.deletePatient(id).subscribe((data) => {
      this.getPatients();
    })
  }



}

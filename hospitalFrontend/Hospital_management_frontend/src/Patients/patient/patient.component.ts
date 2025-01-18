import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [CommonModule, HttpClientModule,RouterModule],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent {
  patients: Patient[] =[];
  constructor(private patientService: PatientService) {
  }

  ngOnInit(): void {
    this.getAppointments();    
  }
  getAppointments() {
    this.patientService.getPatients().subscribe((data) => {
      this.patients = data;
    });
  }
  delete(id:number){
    this.patientService.deletePatient(id).subscribe((data) => {
      this.getAppointments();
    })
} 

}

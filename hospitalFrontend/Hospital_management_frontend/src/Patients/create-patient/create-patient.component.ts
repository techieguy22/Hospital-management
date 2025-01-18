import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-patient',
  standalone: true,
  imports: [CommonModule, HttpClientModule,RouterModule,FormsModule],
  templateUrl: './create-patient.component.html',
  styleUrl: './create-patient.component.css'
})
export class CreatePatientComponent {
  patient :Patient =  new Patient();
  constructor(private patientService:PatientService,private router:Router) { }
  savePatient() {
    this.patientService.createPatients(this.patient).subscribe(data => {
      this.goToPatientList();
    })
  }
  
  onSubmit() {
    this.savePatient();
  }
  goToPatientList() {
    this.router.navigate(['./patientList']);
  }

}

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PatientService } from '../Patients/patient.service';
import { Patient } from '../Patients/patient';

@Component({
  selector: 'app-doc-dash',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterModule],
  templateUrl: './doc-dash.component.html',
  styleUrl: './doc-dash.component.css'
})
export class DocDashComponent {
  patients: Patient[] =[];
  constructor(private patientService: PatientService,private router:Router) {
    
  }

  ngOnInit(): void {
    this.getPatients();    
  }
  getPatients() {
    this.patientService.getPatients().subscribe((data) => {
      this.patients = data;
    });
  }
  update(id:number){
    this.router.navigate(['update-patient',id]);
  }
  delete(id:number){
    this.patientService.deletePatient(id).subscribe((data) => {
      this.getPatients();
    })
  }
  view(id:number){
    this.router.navigate(['view-patient',id]);
  }

}

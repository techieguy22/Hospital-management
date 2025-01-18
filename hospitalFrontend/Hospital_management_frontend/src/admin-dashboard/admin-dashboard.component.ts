import { Component } from '@angular/core';
import { PatientService } from '../Patients/patient.service';
import { Patient } from '../Patients/patient';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { AdminauthService } from '../admin-auth.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  patients: Patient[] =[];
  constructor(private patientService: PatientService,private adminauthService:AdminauthService,private router:Router) {
    
  }

  ngOnInit(): void {
    this.getPatients();    
  }
  getPatients() {
    console.log(1);
    this.patientService.getPatients().subscribe((data) => {
      this.patients = data;
      // console.log(3,data);
    });
  }
  delete(id:number){
    console.log("deleted");
    this.patientService.deletePatient(id).subscribe((data) => {
      this.getPatients();
    })
  }
  logout(){
    this.adminauthService.logout();
    this.router.navigate(['home']);
  }

}

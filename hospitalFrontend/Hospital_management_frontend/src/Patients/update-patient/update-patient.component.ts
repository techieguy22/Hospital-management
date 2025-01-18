import { Component } from '@angular/core';
import { Patient } from '../patient';
import { FormsModule } from '@angular/forms';
import { PatientService } from '../patient.service';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-update-patient',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './update-patient.component.html',
  styleUrl: './update-patient.component.css'
})
export class UpdatePatientComponent {
  patient: Patient = new Patient();
  id:number=0;
  constructor(private patientService:PatientService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit():void{
    this.id=this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe(data=>{
      this.patient=data;
    })
  }

  
  onSubmit() {
    this.patientService.updatePatient(this.id,this.patient).subscribe(data => {
      console.log(data);
      this.goToDocDash();
    })
  }
  goToDocDash(){
    this.router.navigate(['/doc-dash']);
  }
}

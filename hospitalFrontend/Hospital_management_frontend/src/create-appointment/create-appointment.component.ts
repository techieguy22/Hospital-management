import { Component } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-appointment',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-appointment.component.html',
  styleUrl: './create-appointment.component.css'
})
export class CreateAppointmentComponent {
  appointment :Appointment =  new Appointment();
  constructor(private appointmentService:AppointmentService,private router:Router) { }
  saveAppointment() {
    this.appointmentService.createAppointments(this.appointment).subscribe(data => {
      console.log(data);
      this.goToAppointmentList();
    })
  }

  onSubmit() {
    this.saveAppointment();
  }
  goToAppointmentList() {
    this.router.navigate(['./appointmentList']);
  }
  
}

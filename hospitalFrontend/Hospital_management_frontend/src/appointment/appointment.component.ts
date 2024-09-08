import { Component } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule, HttpClientModule,RouterModule],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {

  appointments: Appointment[] =[];
  constructor(private appointmentService: AppointmentService) {
  }

  ngOnInit(): void {
    this.getAppointments();    
  }
  getAppointments() {
    this.appointmentService.getAppointments().subscribe((data) => {
      this.appointments = data;
    });
  }
  delete(id:number){
    console.log("deleted");
    this.appointmentService.deleteAppointment(id).subscribe((data) => {
      this.getAppointments();
    })
  }

}
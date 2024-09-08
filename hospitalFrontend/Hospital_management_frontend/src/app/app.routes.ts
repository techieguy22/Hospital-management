import { Routes } from '@angular/router';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { AppointmentComponent } from '../appointment/appointment.component';
import { MedicineComponent } from '../medicine/medicine.component';
import { CreateAppointmentComponent } from '../create-appointment/create-appointment.component';
import { HomeComponent } from '../home/home.component';

export const routes: Routes = [
  {
    path: 'admin',
    component: AdminDashboardComponent
  },
  {
    path: 'appointment',
    component: AppointmentComponent
  },
  {
    path: 'medicine',
    component: MedicineComponent
  },
  {
    path: 'create-appointment',
    component: CreateAppointmentComponent
  },
  {
    path:'appointmentList',
    component:AppointmentComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }


];

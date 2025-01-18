import { Routes } from '@angular/router';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { AppointmentComponent } from '../Appoints/appointment/appointment.component'; 
import { MedicineComponent } from '../Medicines/medicine/medicine.component';
import { CreateAppointmentComponent } from '../Appoints/create-appointment/create-appointment.component';
import { HomeComponent } from '../home/home.component';
import { CreateMedicineComponent } from '../Medicines/create-medicine/create-medicine.component';
import { DocDashComponent } from '../doc-dash/doc-dash.component';
import { CreatePatientComponent } from '../Patients/create-patient/create-patient.component';
import { PatientComponent } from '../Patients/patient/patient.component';
import { UpdatePatientComponent } from '../Patients/update-patient/update-patient.component';
import { UpdateMedicineComponent } from '../Medicines/update-medicine/update-medicine.component';
import { ViewPatientComponent } from '../Patients/view-patient/view-patient.component';
import { DocloginComponent } from '../doclogin/doclogin.component';

export const routes: Routes = [
  {
    path: 'doc-login',
    component: DocloginComponent
  },
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
    path:'doc-dash',
    component:DocDashComponent
  },
  {
    path: 'create-patient',
    component: CreatePatientComponent
  },
  {
    path: 'patientList',
    component: PatientComponent
  },
  {
    path: 'create-medicine',
    component: CreateMedicineComponent
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
    path: 'update-patient/:id',
    component: UpdatePatientComponent
  },
  {
    path: 'view-patient/:id',
    component: ViewPatientComponent
  },
  {
    path: 'update-medicine/:id',
    component: UpdateMedicineComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'**',
    redirectTo:'home',
    pathMatch:'full'
  }


];

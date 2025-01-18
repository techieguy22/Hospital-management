// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-create-medicine',
//   standalone: true,
//   imports: [],
//   templateUrl: './create-medicine.component.html',
//   styleUrl: './create-medicine.component.css'
// })
// export class CreateMedicineComponent {

// }
import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-medicine',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './create-medicine.component.html',
  styleUrl: './create-medicine.component.css'
})
export class CreateMedicineComponent {
  medicine :Medicine =  new Medicine();
  constructor(private medicineService:MedicineService,private router:Router) { }
  saveMedicine() {
    this.medicineService.createMedicines(this.medicine).subscribe(data => {
      this.goToMedicineList();
    })
  }

  onSubmit() {
    this.saveMedicine();
  }
  goToMedicineList() {
    this.router.navigate(['./medicine']);
  }
}

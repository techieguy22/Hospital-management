import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-medicine',
  standalone: true,
  imports: [CommonModule, HttpClientModule,RouterModule],
  templateUrl: './medicine.component.html',
  styleUrl: './medicine.component.css'
})
export class MedicineComponent {

  medicines: Medicine[] =[];
  constructor(private medicineService: MedicineService,private router:Router) {
  }

  ngOnInit(): void {
    this.getMedicines();    
  }
  getMedicines() {
    this.medicineService.getMedicines().subscribe((data) => {
      this.medicines = data;
    });
  }
  delete(id:number){
    console.log("deleted"); 
    this.medicineService.deleteMedicine(id).subscribe((data) => {
      this.getMedicines();
    })
  }
  update(id:number){
    this.router.navigate(['update-medicine',id]);
  }
}
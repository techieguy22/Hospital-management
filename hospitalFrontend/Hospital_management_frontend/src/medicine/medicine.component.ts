import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-medicine',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './medicine.component.html',
  styleUrl: './medicine.component.css'
})
export class MedicineComponent {

  medicines: Medicine[] =[];
  constructor(private medicineService: MedicineService) {
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



}
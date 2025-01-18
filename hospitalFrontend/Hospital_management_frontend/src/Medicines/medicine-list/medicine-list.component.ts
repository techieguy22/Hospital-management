import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-medicine-list',
  standalone: true,
  imports: [],
  templateUrl: './medicine-list.component.html',
  styleUrl: './medicine-list.component.css'
})
export class MedicineListComponent {
  private medicines: Medicine[] = [];
  constructor(private medicineService: MedicineService) 
  getMedicines(){
    this.medicineService.getMedicines().subscribe((data) => {
      this.medicines=data;
    })
  }
}

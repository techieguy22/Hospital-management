import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MedicineService } from '../medicine.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-medicine',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './update-medicine.component.html',
  styleUrl: './update-medicine.component.css'
})
export class UpdateMedicineComponent {
  medicine:Medicine = new Medicine();
  id:number=0;
  constructor(private route:ActivatedRoute,private medicineService:MedicineService,private router:Router){}
  ngOnInit():void{
    this.id=this.route.snapshot.params['id'];
    this.medicineService.getMedicineById(this.id).subscribe(data=>{
      this.medicine=data;
    })
  }


  onSubmit(){
    this.medicineService.updateMedicine(this.id,this.medicine).subscribe(data => {
      this.router.navigate(['medicine']);
    })

  }
}

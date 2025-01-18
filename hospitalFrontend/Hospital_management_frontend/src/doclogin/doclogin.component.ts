import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocauthService } from '../doc-auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-doclogin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './doclogin.component.html',
  styleUrls: ['./doclogin.component.css'],
})
export class DocloginComponent {
  username: string = '';
  password: string = '';
  isValidLogin: boolean = false;

  constructor(private router: Router, private docauth: DocauthService) {}

  checkLogin() {
    if(this.docauth.authenticate(this.username, this.password)){
      this.router.navigate(['/doc-dash']);
      this.isValidLogin = true;
    }
    else{
      alert('Invalid username or password');
      this.router.navigate(['/home']);
      // return false;
    }
    // console.log(1,this.username,this.password);
    // if (this.username === 'Abhi' && this.password === 'Abhi@123') {
    //   this.isValidLogin = true;
    //   sessionStorage.setItem('username', this.username);
    //   this.router.navigate(['/doc-dash']);
    //   return true;
    // } else {
    //   alert('Invalid username or password');
    //   this.router.navigate(['/home']);
    //   return false;
    // }
  }
}

// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { DocauthService } from '../doc-auth.service';

// @Component({
//   selector: 'app-doclogin',
//   standalone: true,
//   imports: [],
//   templateUrl: './doclogin.component.html',
//   styleUrl: './doclogin.component.css'
// })
// export class DocloginComponent {
//   username: string='';
//   password: string='';
  
//   isValidLogin=false;

//   constructor(private router:Router,private docauth:DocauthService) { }


//   checkLogin(){
//     this.docauth.authenticate(this.username,this.password){
//             this.router.navigate(['/docdash']);
//             this.isValidLogin=true;
//     } 
//     else{
//       alert('Invalid username or password');
//     }
//     if(this.username=="Abhi" && this.password=="Abhi@123"){
//       this.isValidLogin=true;
//       sessionStorage.setItem('username',this.username);
//       this.router.navigate(['/docdash']);
//       return true;
//   }
//   else{
//     alert('Invalid username or password');
//     this.router.navigate(['home']);
//     return false;
//   }
// }

// }

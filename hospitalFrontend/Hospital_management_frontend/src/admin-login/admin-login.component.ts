import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DocauthService } from '../doc-auth.service';
import { AdminauthService } from '../admin-auth.service';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  username: string = '';
  password: string = '';
  isValidLogin: boolean = false;


  constructor(private router: Router, private adminAuthService: AdminauthService) {}

  checkLogin() {
    if(this.adminAuthService.authenticate(this.username, this.password)){
      this.router.navigate(['/admin']);
      this.isValidLogin = true;
    }
    else{
      alert('Invalid username or password');
      this.router.navigate(['/home']);
      // return false;
    }
  }


}

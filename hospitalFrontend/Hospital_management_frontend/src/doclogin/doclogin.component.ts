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
    }
  }
}


import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user = {
    email: "",
    password: ""
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    this.authService.login(this.user.email, this.user.password)
       .then(res => {
         this.router.navigate(['/']);
       })
       .catch(err => console.error(err.message));
  }

}

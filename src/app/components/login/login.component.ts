import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

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

  constructor(
         private authService: AuthService, 
         private router: Router, 
         private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  loginUser() {
    this.authService.login(this.user.email, this.user.password)
       .then(res => {
        this.flashMessage.show("welcome to product store", {cssClass: 'alert-success', timeout: 3000});
         this.router.navigate(['/']);
       })
       .catch(err => {
         this.flashMessage.show(err.message, {cssClass: 'alert-danger', timeout: 3000});
       });
  }


  loginUserWithGoogle() {
    this.authService.loginGoogle()
    .then(res => {
      this.flashMessage.show("welcome to product store", {cssClass: 'alert-success', timeout: 3000});
       this.router.navigate(['/']);
     })
     .catch(err => {
       this.flashMessage.show(err.message, {cssClass: 'alert-danger', timeout: 3000});
     });
  }

}

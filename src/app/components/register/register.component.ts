import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  user = {
    name: "",
    email: "",
    password: ""
  }
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  createUser() {
     this.authService.register(this.user.email, this.user.password)
        .then(res => console.log(res))
        .catch(err => console.error(err.message))
  }

}

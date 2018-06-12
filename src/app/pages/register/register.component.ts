import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerData = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    address: '',
    postal: '',
    city: '',
  };

  registerFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {}

  doRegister() {
    this.authService.register(this.registerData)
      .subscribe(() => this.router.navigateByUrl('/login'),
      (error) => {
        this.errorMessage = error.error.message;
        this.registerFailed = true
      });
  }
}

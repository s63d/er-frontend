import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'goosje@hotmail.com';
  password = 'Wachtwoord2';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  doLogin() {
    this.authService.login(this.username, this.password);
  }

}

import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'maudhje@hotmail.com';
  password = 'Wachtwoord2';

  wrongLogin = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  doLogin() {
    this.authService.login(this.username, this.password)
      .subscribe(() => this.router.navigateByUrl('/'),
      () => this.wrongLogin = true);
  }

}

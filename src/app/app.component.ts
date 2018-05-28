import { Component } from '@angular/core';
import {AuthService} from './services/auth.service';
import {Observable} from 'rxjs';
import {User} from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // user$: Observable<User>;

  constructor(private authService: AuthService) {
    //
    // this.user$ = authService.user;
    // authService.user.subscribe(user => {
    //   console.log('subscribed user thingy');
    //   console.log(user);
    // });
  }

  doLogin() {
    // console.log('doing login..');
    this.authService.login(this.username, this.password);
  }
}

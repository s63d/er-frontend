import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Observable} from 'rxjs';
import {User} from '../../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user$: Observable<User>;
  constructor(private authService: AuthService) {
    this.user$ = authService.user$;
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }
}

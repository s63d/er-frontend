import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {User} from '../../models/user';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {ROLE_BASIC, ROLE_GOV, ROLE_POLICE} from '../../models/roles';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ROLE_POLICE = ROLE_POLICE;
  ROLE_GOV = ROLE_GOV;
  ROLE_BASIC = ROLE_BASIC;

  role$ = this.auth.user$.pipe(
    map((user: User) => user.role)
  );

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
}

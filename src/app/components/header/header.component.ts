import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {ROLE_ADMIN, ROLE_BASIC, ROLE_GOV, ROLE_POLICE} from '../../models/roles';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ROLE_POLICE = ROLE_POLICE;
  ROLE_GOV = ROLE_GOV;
  ROLE_BASIC = ROLE_BASIC;
  ROLE_ADMIN = ROLE_ADMIN;

  role$ = this.auth.user$.pipe(
    map((user: any) => user ? user.role : '')
  );

  searchTerm: String;

  constructor(public auth: AuthService, private router: Router) {
  }

  ngOnInit() {}

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }


  onSearch() {
    this.router.navigateByUrl(`/police/cars/${this.searchTerm}`);
  }
}

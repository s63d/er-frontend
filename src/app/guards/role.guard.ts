import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service';
import {map, tap} from 'rxjs/operators';
import {User} from '../models/user';
import {ROLE_BASIC, ROLE_BASIC_HOME, ROLE_GOV, ROLE_GOV_HOME, ROLE_POLICE, ROLE_POLICE_HOME} from '../models/roles';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const role = next.data.role || '';

    return this.auth.user$.pipe(
      tap((user: User) => {
        const userRole = user.role.toUpperCase();
        if (userRole === role.toUpperCase()) {
          return;
        }
        switch (userRole) {
          case ROLE_POLICE:
              this.router.navigateByUrl(ROLE_POLICE_HOME);
            return;
          case ROLE_GOV:
            this.router.navigateByUrl(ROLE_GOV_HOME);
            return;
          case ROLE_BASIC:
            this.router.navigateByUrl(ROLE_BASIC_HOME);
            return;
        }
      }),
      map((user: User) => user.role.toUpperCase() === role.toUpperCase()),
    );
  }
}

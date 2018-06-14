import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {User} from '../models/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import {map, tap} from 'rxjs/operators';
import {API_BASE_URL, BASE_URL} from '../constants';


const TOKEN_KEY = 'access_token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<User>(null);

  user$ = this.userSubject.asObservable();

  decodeToken = [
    map((token: string) => this.helper.decodeToken(token)),
    map((token: any) => new User(token.userId, token.sub, token.userRole.toUpperCase())),
    tap((user: User) => this.userSubject.next(user))
  ];

  constructor(private http: HttpClient, public helper: JwtHelperService) {

    if (!this.hasToken()) {
      return;
    }

    of(this.getToken()).pipe(
      ... this.decodeToken,
    ).subscribe();
  }

  login(username, password) {
    const body = new HttpParams({fromObject: {username, password}});

    return this.http.post(`${API_BASE_URL}/login`, body.toString(), {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      observe: 'response'
    }).pipe(
      map(resp => resp.headers.get('Authorization').substr('Bearer '.length)),
      tap(token => this.saveToken(token)),
      this.decodeToken[0],
      this.decodeToken[1],
      this.decodeToken[2]
      //...this.decodeToken // TODO maybe fix this
    );
  }

  register(registerData: any) {
    const body = new HttpParams({fromObject: registerData});

    return this.http.post(`${API_BASE_URL}/users`, body.toString(), {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    });
  }

  logout() {
    localStorage.removeItem(TOKEN_KEY);
    this.userSubject.next(null);
  }

  private saveToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
  }

  private hasToken(): boolean {
    return !!localStorage.getItem(TOKEN_KEY);
  }

  private getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }
}

export function tokenGetter() {
  return localStorage.getItem(TOKEN_KEY);
}

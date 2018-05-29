import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {User} from '../models/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import {map, tap} from 'rxjs/operators';


const TOKEN_KEY = 'access_token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<User>(null);

  user$ = this.userSubject.asObservable();

  decodeToken = [
    map(response => this.helper.decodeToken(response.token)),
    map(token => new User(token.sub, 'todo@gmail.com', token.userRole)),
    tap(user => this.userSubject.next(user))
  ];

  constructor(private http: HttpClient, public helper: JwtHelperService) {

    if (!this.hasToken()) {
      return;
    }

    of(this.getToken()).pipe(
      ... this.decodeToken,
    ).subscribe(user => console.log('restoring user..', user));
  }

  login(username, password) {
    const body = new HttpParams({fromObject: {username, password}});

    // localhost:8081/login
    return this.http.post<any>('http://httpbin.org/post', body.toString(), {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      observe: 'response'
    }).pipe(
      tap(resp => {
        const keys = resp.headers.keys();
        keys.map(key => `${key}: ${resp.headers.get(key)}`).forEach(console.log);

      })
    );
      // tap(response => this.saveToken(response.token)),
      // ... this.decodeToken);
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

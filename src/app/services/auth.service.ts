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
    map((token: string) => this.helper.decodeToken(token)),
    map((token: any) => new User(token.userId, token.sub, token.userRole)),
    tap((user: User) => this.userSubject.next(user))
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

    return this.http.post('http://localhost:8081/login', body.toString(), {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      observe: 'response'
    }).pipe(
      map(resp => resp.headers.get('Authorization').substr('Bearer '.length)),
      tap(token => this.saveToken(token)),
      ... this.decodeToken
    );
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

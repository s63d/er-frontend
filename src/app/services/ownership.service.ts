import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ownership} from '../models/ownership';

@Injectable({
  providedIn: 'root'
})
export class OwnershipService {

  constructor(private http: HttpClient) { }

  loadActive() {
    return this.http.get<Ownership[]>('http://localhost:8080/api/vehicles/current');
  }

  loadPrevious() {
    return this.http.get<Ownership[]>('http://localhost:8080/api/vehicles/history');
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Page} from '../models/page';
import {GovernmentVehicle} from '../models/government-vehicle';

@Injectable({
  providedIn: 'root'
})
export class GovernmentService {

  constructor(private http: HttpClient) { }


  vehicles(page = 1): Observable<Page<GovernmentVehicle>> {
    return this.http.get(`http://localhost:8080/api/gov/vehicles?page=${page - 1}`);
  }

  assignCartracker(id): Observable<GovernmentService> {
    return this.http.post(`http://localhost:8080/api/gov/vehicles/${id}/assignCartracker`, {})
  }
}

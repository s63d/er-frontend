import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Page} from '../models/page';
import {GovernmentVehicle} from '../models/government-vehicle';
import { API_BASE_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class GovernmentService {

  constructor(private http: HttpClient) { }


  vehicles(page = 1): Observable<Page<GovernmentVehicle>> {
    return this.http.get<Page<GovernmentVehicle>>(`${API_BASE_URL}/gov/vehicles?page=${page - 1}`);
  }

  assignCartracker(id): Observable<GovernmentVehicle> {
    return this.http.post<GovernmentVehicle>(`${API_BASE_URL}/gov/vehicles/${id}/assignCartracker`, {});
  }
}

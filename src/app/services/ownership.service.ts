import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ownership} from '../models/ownership';
import {Vehicle} from '../models/vehicle';
import { API_BASE_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class OwnershipService {

  constructor(private http: HttpClient) { }

  loadActive() {
    return this.http.get<Ownership[]>(`${API_BASE_URL}/vehicles`);
  }

  loadPrevious() {
    return this.http.get<Ownership[]>(`${API_BASE_URL}/vehicles`);
  }

  suspendVehicle(vehicle: Vehicle) {
    return this.http.post(`${API_BASE_URL}/vehicles/${vehicle.id}/suspend`, {});
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ownership} from '../models/ownership';
import {Vehicle} from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class OwnershipService {

  constructor(private http: HttpClient) { }

  loadActive() {
    return this.http.get<Ownership[]>('http://localhost:8080/api/vehicles');
  }

  loadPrevious() {
    return this.http.get<Ownership[]>('http://localhost:8080/api/vehicles');
  }

  suspendVehicle(vehicle: Vehicle) {
    return this.http.post(`http://localhost:8080/api/vehicles/${vehicle.id}/suspend`, {});
  }
}

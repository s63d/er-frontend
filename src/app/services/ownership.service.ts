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
    return this.http.get<Ownership[]>('http://localhost/api/vehicles');
  }

  loadPrevious() {
    return this.http.get<Ownership[]>('http://localhost/api/vehicles');
  }

  suspendVehicle(vehicle: Vehicle) {
    return this.http.post(`http://localhost/api/vehicles/${vehicle.id}/suspend`, {});
  }
}

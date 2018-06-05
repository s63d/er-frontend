import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BasicVehicle} from '../models/basic-vehicle';
import {Page} from '../models/page';
import {Trip} from '../models/basic-invoice';

@Injectable({
  providedIn: 'root'
})
export class BasicService {


  constructor(private http: HttpClient) { }

  vehicles(page = 1) {
    return this.http.get<BasicVehicle[]>('http://localhost:8080/api/vehicles');
  }

  registerVehicle(vehicleData: {}) {
    const body = new HttpParams({fromObject: vehicleData});
    return this.http.post('http://localhost:8080/api/vehicles', body);
  }

  suspendVehicle(vehicleId: String) {
    return this.http.post(`http://localhost:8080/api/vehicles/${vehicleId}/suspend`, {});
  }

  trips(vehicleId: String, page: number = 1) {
    return this.http.get<Page<Trip>>(`http://localhost:8082/api/trips?vehicleId=${vehicleId}`);
  }
}

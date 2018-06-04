import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BasicVehicle} from '../models/basic-vehicle';

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
}

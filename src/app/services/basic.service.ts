import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BasicVehicle} from '../models/basic-vehicle';
import {Page} from '../models/page';
import {Trip} from '../models/basic-invoice';
import { API_BASE_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class BasicService {


  constructor(private http: HttpClient) { }

  vehicles(page = 1) {
    return this.http.get<BasicVehicle[]>(`${API_BASE_URL}/vehicles`);
  }

  registerVehicle(vehicleData: {}) {
    const body = new HttpParams({fromObject: vehicleData});
    return this.http.post(`${API_BASE_URL}/vehicles`, body);
  }

  suspendVehicle(vehicleId: String) {
    return this.http.post(`${API_BASE_URL}/vehicles/${vehicleId}/suspend`, {});
  }

  trips(vehicleId: String, page: number = 1) {
    return this.http.get<Page<Trip>>(`${API_BASE_URL}/trips?vehicleId=${vehicleId}`);
  }
}

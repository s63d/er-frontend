import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Page} from '../models/page';
import {GovernmentVehicle} from '../models/government-vehicle';
import { API_BASE_URL } from '../constants';
import {Rate} from '../models/rate';
import {Invoice} from '../models/invoice';

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

  rates(): Observable<Rate[]> {
    return this.http.get<Rate[]>(`${API_BASE_URL}/rates`);
  }

  updateRate(category: String, price: number) {
    const body = new HttpParams()
      .set('category', category.toString())
      .set('price', price.toString());
    return this.http.put(`${API_BASE_URL}/rates`, body);
  }

  invoices(page = 1): Observable<Page<Invoice>> {
    return this.http.get<Page<Invoice>>(`${API_BASE_URL}/invoices/all`);
  }
}

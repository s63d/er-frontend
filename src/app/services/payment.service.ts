import { Injectable } from '@angular/core';
import {API_BASE_URL} from "../constants";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  createPayment(sum: string) {
    const body = new HttpParams().set('sum', sum);
    return this.http.post(`${API_BASE_URL}/paypal/payment`, body)
  }

  completePayment(paymentId, payerId) {
    return this.http.post(`${API_BASE_URL}/paypal/complete?paymentId=${paymentId}&playerId=${payerId}`, {})
  }
}

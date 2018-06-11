import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {AdminUser, Role} from "../models/adminUser";
import {Page} from "../models/page";
import { API_BASE_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAllUsers(page = 1) {
    return this.http.get<Page<AdminUser>>(`${API_BASE_URL}/users?page=${page - 1}`)
  }

  getAllRoles() {
    return this.http.get<Role[]>(`${API_BASE_URL}/roles`)
  }

  changeRole(userId: number, role: string) {
    const body = new HttpParams().set('role', role);
    return this.http.post<AdminUser>(`${API_BASE_URL}/users/${userId}/role`, body)
  }
}

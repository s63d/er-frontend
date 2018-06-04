import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {AdminUser, Role} from "../models/adminUser";
import {Page} from "../models/page";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAllUsers(page = 1) {
    return this.http.get<Page<AdminUser>>(`http://localhost:8081/api/users?page=${page - 1}`)
  }

  getAllRoles() {
    return this.http.get<Role[]>(`http://localhost:8081/api/roles`)
  }

  changeRole(userId: number, role: string) {
    const body = new HttpParams().set('role', role);
    return this.http.post<AdminUser>(`http://localhost:8081/api/users/${userId}/role`, body)
  }
}

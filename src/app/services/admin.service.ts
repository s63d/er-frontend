import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AdminUser} from "../models/adminUser";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAllUsers(page = 1) {
    return this.http.get<AdminUser[]>(`http://localhost:8081/api/users?page=${page - 1}`)
  }
}

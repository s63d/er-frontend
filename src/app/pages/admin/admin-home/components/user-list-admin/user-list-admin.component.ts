import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../../../../services/admin.service";
import {Observable} from "rxjs/Observable";
import {AdminUser} from "../../../../../models/adminUser";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-user-list-admin',
  templateUrl: './user-list-admin.component.html',
  styleUrls: ['./user-list-admin.component.css']
})
export class UserListAdminComponent implements OnInit {

  users$: Observable<AdminUser[]>;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.users$ = this.adminService.getAllUsers()
      .pipe(
        map((p: any) => p.content)
      )
  }

}

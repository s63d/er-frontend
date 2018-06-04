import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../../../../services/admin.service";
import {Observable} from "rxjs/Observable";
import {AdminUser} from "../../../../../models/adminUser";
import {map} from "rxjs/operators";
import {Page} from "../../../../../models/page";

@Component({
  selector: 'app-user-list-admin',
  templateUrl: './user-list-admin.component.html',
  styleUrls: ['./user-list-admin.component.css']
})
export class UserListAdminComponent implements OnInit {

  users$: Observable<AdminUser[]>;
  page$: Observable<Page<AdminUser>>;

  activePage: number;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.activePage = 1;
    this.page$ = this.adminService.getAllUsers(this.activePage);
    this.users$ = this.page$
      .pipe(
        map((p: Page<AdminUser>) => p.content)
      )
  }

}

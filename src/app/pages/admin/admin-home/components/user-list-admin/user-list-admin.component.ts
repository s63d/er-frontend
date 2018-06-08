import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../../../../services/admin.service";
import {Observable} from "rxjs/Observable";
import {AdminUser, Role} from "../../../../../models/adminUser";
import {map} from "rxjs/operators";
import {Page} from "../../../../../models/page";
import {combineLatest} from "rxjs/index";

@Component({
  selector: 'app-user-list-admin',
  templateUrl: './user-list-admin.component.html',
  styleUrls: ['./user-list-admin.component.css']
})
export class UserListAdminComponent implements OnInit {

  users$: Observable<AdminUser[]>;
  page$: Observable<Page<AdminUser>>;
  roles$: Observable<Role[]>;

  activePage: number;

  showModal: boolean;
  selectedUser: AdminUser;
  selectedRole: Role;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.activePage = 1;
    this.showModal = false;
    this.page$ = this.adminService.getAllUsers(this.activePage);
    this.users$ = this.page$
      .pipe(
        map((p: Page<AdminUser>) => p.content)
      );
    this.roles$ = this.adminService.getAllRoles();
  }

  openRoleModal(user: AdminUser) {
    this.selectedUser = user;
    this.selectedRole = user.role;
    this.showModal = true;
  }

  changeRole() {
    const updatedUser$ = this.adminService.changeRole(this.selectedUser.id, this.selectedRole.name);

    this.users$ = combineLatest(this.users$, updatedUser$)
      .pipe(
        map(data => {
          const users: AdminUser[] = data[0];
          const updated: AdminUser = data[1];
          return users.map((user: AdminUser) => user.id === updated.id ? updated : user)
        })
      );

    this.selectedUser = null;
    this.showModal = false
  }
}

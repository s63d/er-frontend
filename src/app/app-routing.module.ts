import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CarsComponent } from './pages/basic/cars/cars.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { TripsComponent } from './pages/basic/trips/trips.component';
import { InvoicesComponent } from './pages/basic/invoices/invoices.component';
import { RoleGuard } from './guards/role.guard';
import { AllCarsComponent } from './pages/police/all-cars/all-cars.component';
import { CarDetailsComponent } from './pages/police/car-details/car-details.component';
import { ROLE_ADMIN, ROLE_BASIC, ROLE_GOV, ROLE_POLICE } from './models/roles';
import {AdminHomeComponent} from "./pages/admin/admin-home/admin-home.component";
import {GovCarsListComponent} from "./pages/gov/cartrackers-list/gov-cars-list.component";
import { InvoiceDetailUserComponent } from './pages/basic/invoices/invoice-detail-user/invoice-detail-user.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  /*
   * Basic users
   */
  {
    path: 'cars',
    component: CarsComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ROLE_BASIC
    }
  },
  {
    path: 'trips',
    component: TripsComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ROLE_BASIC
    }
  },
  {
    path: 'invoices',
    component: InvoicesComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ROLE_BASIC
    }
  },
  {
    path: 'invoices/detail',
    component: InvoiceDetailUserComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ROLE_BASIC
    }
  },
  /*
   * Police users
   */
  {
    path: 'police/cars',
    component: AllCarsComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ROLE_POLICE
    }
  },
  {
    path: 'police/cars/:id',
    component: CarDetailsComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ROLE_POLICE
    }
  },

  /*
   * Government users
   */
  {
    path: 'gov/cars',
    component: GovCarsListComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ROLE_GOV
    }
  },

  /*
   * Admin users$
   */
  {
    path: 'admin',
    component: AdminHomeComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ROLE_ADMIN
    }
  },

  {
    path: '**',
    redirectTo: '/cars'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

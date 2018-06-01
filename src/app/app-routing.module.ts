import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {CarsComponent} from './pages/basic/cars/cars.component';
import {AuthGuard} from './guards/auth.guard';
import {LoginGuard} from './guards/login.guard';
import {TripsComponent} from './pages/basic/trips/trips.component';
import {InvoicesComponent} from './pages/basic/invoices/invoices.component';
import {RoleGuard} from './guards/role.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'cars',
    component: CarsComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: 'BASIC'
    }
  },
  {
    path: 'trips',
    component: TripsComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: 'BASIC'
    }
  },
  {
    path: 'invoices',
    component: InvoicesComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: 'BASIC'
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

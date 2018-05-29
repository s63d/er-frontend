import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {CarsComponent} from './pages/cars/cars.component';
import {AuthGuard} from './guards/auth.guard';
import {LoginGuard} from './guards/login.guard';
import {TripsComponent} from './pages/trips/trips.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'cars',
    component: CarsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'trips',
    component: TripsComponent,
    canActivate: [AuthGuard]
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

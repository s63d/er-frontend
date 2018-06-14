import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';

import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from "./pages/register/register.component";
import { tokenGetter } from './services/auth.service';
import { CarsComponent } from './pages/basic/cars/cars.component';
import { TripsComponent } from './pages/basic/trips/trips.component';
import { InvoicesComponent } from './pages/basic/invoices/invoices.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterCarModalComponent } from './pages/basic/cars/components/register-car-modal/register-car-modal.component';
import { CarsTableComponent } from './pages/basic/cars/components/cars-table/cars-table.component';
import { YagaModule } from '@yaga/leaflet-ng2';
import { GovLinksComponent } from './components/header/gov-links/gov-links.component';
import { BasicLinksComponent } from './components/header/basic-links/basic-links.component';
import { PoliceLinksComponent } from './components/header/police-links/police-links.component';
import { AllCarsComponent } from './pages/police/all-cars/all-cars.component';
import { CarDetailsComponent } from './pages/police/car-details/car-details.component';
import { GovCarsListComponent } from './pages/gov/cartrackers-list/gov-cars-list.component';
import { AdminLinksComponent } from './components/header/admin-links/admin-links.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { UserListAdminComponent } from './pages/admin/admin-home/components/user-list-admin/user-list-admin.component';
import { TripListComponent } from './pages/basic/trips/components/trip-list/trip-list.component';
import { InvoiceDetailUserComponent } from './pages/basic/invoices/invoice-detail-user/invoice-detail-user.component';
import { GovRateListComponent } from './pages/gov/rates-list/gov-rate-list/gov-rate-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    CarsComponent,
    TripsComponent,
    InvoicesComponent,
    RegisterCarModalComponent,
    CarsTableComponent,
    GovLinksComponent,
    BasicLinksComponent,
    PoliceLinksComponent,
    AllCarsComponent,
    CarDetailsComponent,
    AdminLinksComponent,
    AdminHomeComponent,
    UserListAdminComponent,
    GovCarsListComponent,
    TripListComponent,
    InvoiceDetailUserComponent,
    GovRateListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost', 'api.ersols.online'],
      }
    }),
    BrowserAnimationsModule,
    YagaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

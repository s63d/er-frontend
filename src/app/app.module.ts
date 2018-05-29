import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';

import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import {tokenGetter} from './services/auth.service';
import { CarsComponent } from './pages/cars/cars.component';
import { TripsComponent } from './pages/trips/trips.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RegisterCarModalComponent } from './pages/cars/components/register-car-modal/register-car-modal.component';
import { CarsTableComponent } from './pages/cars/components/cars-table/cars-table.component';
import { YagaModule } from '@yaga/leaflet-ng2';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CarsComponent,
    TripsComponent,
    InvoicesComponent,
    RegisterCarModalComponent,
    CarsTableComponent
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
        whitelistedDomains: ['localhost:8081', 'localhost:8080', 'localhost:8082'],
      }
    }),
    BrowserAnimationsModule,
    YagaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
